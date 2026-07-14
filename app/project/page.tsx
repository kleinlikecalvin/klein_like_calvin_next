import { Suspense } from "react";
import FullProjectClient from "../components/Projects/FullProjectClient";

export default function Project() {
  return (
    <Suspense fallback={<div>Looking for the selected project data...</div>}>
      <FullProjectClient />
    </Suspense>
  );
}
