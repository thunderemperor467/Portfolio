import { useState } from "react";

export function useToast() {
const toast = ({ title, description }) => {
alert(title + (description ? "\n" + description : ""));
};

return { toast };
}