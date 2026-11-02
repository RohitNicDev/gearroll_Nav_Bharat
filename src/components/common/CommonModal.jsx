import { Modal } from 'antd';
import { useAppStore } from '../../store/useAppStore';

export default function CommonModal() {
  const { activeModal, modalPayload, closeModal } = useAppStore();
  return <Modal open={Boolean(activeModal)} onCancel={closeModal} onOk={closeModal} title={modalPayload?.title || 'Details'} footer={null} destroyOnClose>{modalPayload?.content || null}</Modal>;
}
