'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface VacationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  autoShow?: boolean;
}

export default function VacationModal({
  isOpen: externalIsOpen,
  onClose,
  autoShow = false
}: VacationModalProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoShow]);

  // Handle external control
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setShowModal(externalIsOpen);
    }
  }, [externalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-lg rounded-lg border bg-primary p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm uppercase transition-colors hover:text-primary"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            <h2 className="mt-8 text-center text-lg font-bold"> 一時発送停止のお知らせ</h2>
            <Image
              src="/vacation.JPG"
              alt="vacation"
              width={1477}
              height={1108}
              className="w-full"
            />

            <div className="mt-6 space-y-4 px-6">
              <p className="text-sm">
                現在、新商品の買付のため一時的に商品の発送を停止しております。商品はご覧いただけますが、チェックアウトはできない状態となっております。
              </p>
              <p className="text-sm">
                新商品と共に戻ってまいりますので、今しばらくお待ちください。ご不便をおかけして申し訳ございません。
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="relative flex w-full items-center justify-center rounded-lg bg-component p-4 text-sm font-medium tracking-wide text-invert transition-all duration-200 hover:opacity-90"
                onClick={() => setShowModal(false)}
              >
                了解しました
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
