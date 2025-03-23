'use client';

import { useVacation } from "components/providers/vacation-provider";
import VacationModal from "./vacation-modal";

export default function VacationInfo() {
  const { onVacation } = useVacation();
  if (!onVacation) return null;
  return <VacationModal autoShow />
}