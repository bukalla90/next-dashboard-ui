import React from "react";
import { z } from "zod";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be 3 characters" })
    .max(20, { message: "username must be at most 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
  firstname: z.string().min(1, { message: "firt name is required" }),
  lastname: z.string().min(1, { message: "lastname is required" }),
  phone: z.number().min(1, { message: "phone is required" }),
  adress: z.string().min(1, { message: "adress is required" }).optional,
  birthday: z.string().min(1, { message: "lastname is required" }),
  street: z.string().min(1, { message: "lastname is required" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "delete";
  data: any;
}) => {
  return <form className=""></form>;
};

export default TeacherForm;
