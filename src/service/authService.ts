import { useCaptainStore } from '@/store/captainStore';
import { tokenStorage } from '@/store/storage';
import { useUserStore } from '@/store/userStore';
import { resetAndNavigate } from '@/utils/Helpers';

export const logout = async () => {
  const { clearData } = useUserStore.getState();
  const { clearCaptainData } = useCaptainStore.getState();

  tokenStorage.clearAll();
  clearCaptainData();
  clearData();
  resetAndNavigate('/role');
};
