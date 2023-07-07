import React, { Fragment } from "react"
import { Dialog } from "@headlessui/react"
import Close from "./assets/icons/Close"

const Modal = ({ title, children, isOpen, setIsOpen }) => {
  // let [isOpen, setIsOpen] = React.useState(false)
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black bg-opacity-25"></div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="max-w-xl w-full py-3 px-4 bg-white rounded-md">
            <Dialog.Title
              className="flex items-center justify-between py-3 mb-4"
              as="div"
            >
              <h2 className="text-xl text-gray-600">{title}</h2>
              <button onClick={() => setIsOpen(false)}>
                <Close />
              </button>
            </Dialog.Title>

            <div>{children}</div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal
