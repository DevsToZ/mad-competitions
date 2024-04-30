interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  text: string;
  toast: any;
  id: string;
  duration?: number;
}

const TOAST_DURATION = 3000;

export const displayToast = ({
  type,
  text,
  toast,
  id,
  duration,
}: ToastProps) => {
  if (toast.isActive(id)) return;

  switch (type) {
    case "success":
      toast({
        id: id,
        title: "Success",
        description: text,
        status: "success",
        duration: TOAST_DURATION,
        isClosable: true,
      });
      break;
    case "error":
      toast({
        id: id,
        title: "Error",
        description: text,
        status: "error",
        duration: duration || TOAST_DURATION,
        isClosable: true,
      });
      break;
    case "warning":
      toast({
        id: id,
        title: "Warning",
        description: text,
        status: "warning",
        duration: TOAST_DURATION,
        isClosable: true,
      });
      break;
    case "info":
      toast({
        id: id,
        title: "Info",
        description: text,
        status: "info",
        duration: TOAST_DURATION,
        isClosable: true,
      });
      break;
  }
};
