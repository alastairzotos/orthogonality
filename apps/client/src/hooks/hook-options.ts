import { useEffect } from "react";

type Status = 'error' | 'pending' | 'success' | 'idle';

export interface HookOptions {
  onStatusChange?: (status: Status) => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useHookOptions = (status: Status, { onStatusChange, onSuccess, onError }: HookOptions) => {
  useEffect(() => {
    onStatusChange?.(status);

    switch (status) {
      case 'success': onSuccess?.(); break;
      case 'error': onError?.(); break;
    }

  }, [status])
}
