import { useRef } from "react";
import { Dialog, DialogHandle } from "./Dialog.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notify } from "@/utils/notify.ts";
import { deleteData } from "../../api/index.ts";

export const Delete = () => {
  const queryClient = useQueryClient();
  const dataModalRef = useRef<DialogHandle>(null);
  const accountModalRef = useRef<DialogHandle>(null);
  const dataMutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      dataModalRef.current?.close();
      notify("action", "All data deleted");
      queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });

  return (
    <fieldset className="flex flex-col items-center gap-4">
      <p className="mb-4">Delete your data or account.</p>
      <div className="flex w-fit flex-col items-center gap-4">
        <button
          className="btn-warning"
          onClick={() => dataModalRef.current?.open()}
        >
          Delete Data
        </button>
        <button
          className="btn-warning"
          onClick={() => accountModalRef.current?.open()}
        >
          Delete Account
        </button>
      </div>
      <Dialog handleClick={() => dataMutation.mutate()} ref={dataModalRef} />
      <Dialog ref={accountModalRef} />
    </fieldset>
  );
};
