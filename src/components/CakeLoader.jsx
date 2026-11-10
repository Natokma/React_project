import { CakeSlice } from "lucide-react";

function CakeLoader() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
      <CakeSlice
        size={35}
        strokeWidth={1.5}
        className="animate-bounce text-white"
      />

      <p className="text-sm font-medium text-white">
        Loading cakes . . .
      </p>
    </div>
  );
}

export default CakeLoader;