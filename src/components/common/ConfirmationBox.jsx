import { Modal } from 'antd';
import { useAppStore } from '../../store/useAppStore';

export default function ConfirmationBox() {
  const { activeModal, modalPayload, closeModal } = useAppStore();
  if (activeModal !== 'confirmation') return null;
  return <Modal open title={modalPayload?.title || 'Please Confirm'} onCancel={closeModal} onOk={() => { modalPayload?.onConfirm?.(); closeModal(); }} okText={modalPayload?.okText || 'Confirm'} cancelText={modalPayload?.cancelText || 'Cancel'}>{modalPayload?.message || 'Are you sure you want to continue?'}</Modal>;
}
