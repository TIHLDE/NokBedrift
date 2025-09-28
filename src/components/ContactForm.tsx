"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MultiCheckbox from "@/components/ui/MultiCheckbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addMonths } from "date-fns";
import { CompaniesEmail } from "@/types/CompaniesEmail";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { postCompanyContact } from "@/services/companyContact";
import { useMutation } from "@tanstack/react-query";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-sm font-medium text-red-500">
          {field.state.meta.errors.map((err) => err.message).join(",")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

const formSchema = z.object({
  bedrift: z.string().min(1, { message: "Feltet er påkrevd" }),
  kontaktperson: z.string().min(1, { message: "Feltet er påkrevd" }),
  epost: z.string().email({ message: "Ugyldig e-post" }),
  time: z
    .array(z.string())
    .min(1, { message: "Du må velge minst ett semester" }),
  type: z
    .array(z.string())
    .min(1, { message: "Du må velge minst en type arrangement" }),
  comment: z.string(),
});

export default function ContactForm() {
  const mutation = useMutation({
    mutationFn: postCompanyContact,
    onSuccess: () => {
      toast.success("Skjemaet ble sendt!");
      form.reset();
    },
    onError: () => {
      toast.error("Skjemaet ble ikke sendt!");
    },
  });

  const form = useForm({
    defaultValues: {
      bedrift: "",
      kontaktperson: "",
      epost: "",
      time: [] as string[],
      type: [] as string[],
      comment: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const payload: CompaniesEmail = {
        info: {
          bedrift: value.bedrift,
          kontaktperson: value.kontaktperson,
          epost: value.epost,
        },
        time: value.time,
        type: value.type,
        comment: value.comment ?? "",
      };

      console.log(payload);

      mutation.mutate(payload);
    },
  });

  const getSemester = (semester: number) => {
    const date = addMonths(new Date(), 1);
    let dateMonth = date.getMonth() + semester * 6;
    let dateYear = date.getFullYear();
    while (dateMonth > 11) {
      dateMonth -= 12;
      dateYear++;
    }
    const returnMonth = dateMonth > 5 ? "Høst" : "Vår";
    return `${returnMonth} ${dateYear}`;
  };

  const semesters = useMemo(() => [...Array(4).keys()].map(getSemester), []);

  const types = [
    "Bedriftspresentasjon",
    "Kurs/Workshop",
    "Bedriftsbesøk",
    "Annonse",
    "Insta-takeover",
    "Bedriftsekskursjon",
    "Annet",
  ];

  return (
    <Card className="border-0 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Ta kontakt med oss</CardTitle>
        <CardDescription>
          Fyll ut kontaktskjemaet, så hører du fra oss straks.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 flex flex-col">
              <form.Field
                name="bedrift"
                children={(field) => {
                  return (
                    <>
                      <Label
                        htmlFor={field.name}
                        className="text-sm font-medium"
                      >
                        Bedrift <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={field.name}
                        placeholder="Firmanavn"
                        className="bg-card-background border-0 text-foreground-primary placeholder:text-foreground-secondary dark:text-black"
                        value={field.state.value || ""}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />

                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <form.Field
                name="kontaktperson"
                children={(field) => {
                  return (
                    <>
                      <Label
                        htmlFor={field.name}
                        className="text-sm font-medium"
                      >
                        Kontaktperson <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={field.name}
                        placeholder="Ola Nordmann"
                        className="bg-card-background border-0 text-foreground-primary placeholder:text-foreground-secondary dark:text-black"
                        value={field.state.value || ""}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />

                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>

            <div className="space-y-2 flex flex-col">
              <form.Field
                name="epost"
                children={(field) => {
                  return (
                    <>
                      <Label
                        htmlFor={field.name}
                        className="text-sm font-medium"
                      >
                        Mail <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={field.name}
                        placeholder="eksempel@mail.com"
                        className="bg-card-background border-0 text-foreground-primary placeholder:text-foreground-secondary dark:text-black"
                        value={field.state.value || ""}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />

                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <form.Field
                name="time"
                mode="array"
                children={(field) => {
                  return (
                    <>
                      <MultiCheckbox
                        label="Tidsramme"
                        options={semesters}
                        selected={field.state.value || []}
                        onChange={(newVal) => field.handleChange(newVal)}
                      />

                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>

            <div className="space-y-4">
              <form.Field
                name="type"
                mode="array"
                children={(field) => {
                  return (
                    <>
                      <MultiCheckbox
                        label="Type arrangement"
                        options={types}
                        selected={field.state.value || []}
                        onChange={(newVal) => field.handleChange(newVal)}
                      />

                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <form.Field
              name="comment"
              children={(field) => {
                return (
                  <>
                    <Label
                      htmlFor={field.name}
                      className="text-sm font-medium text-foreground-primary"
                    >
                      Melding
                    </Label>
                    <Textarea
                      id={field.name}
                      placeholder="Utfyllende beskrivelse"
                      className="bg-card-background border-0 h-32 text-foreground-primary placeholder:text-foreground-secondary dark:text-black"
                      value={field.state.value || ""}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />

                    <FieldInfo field={field} />
                  </>
                );
              }}
            />
          </div>

          <div className="pb-3">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" className="w-full" disabled={!canSubmit}>
                  {isSubmitting ? (
                    <>
                      <p>Sender</p>{" "}
                      <LoaderCircle className="animate-spin w-12 h-12 text-button-foreground" />
                    </>
                  ) : (
                    "Send inn"
                  )}
                </Button>
              )}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
