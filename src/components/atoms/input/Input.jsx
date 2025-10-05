import { IonInput, IonItem, IonLabel } from "@ionic/react";

const Input = ({
  label = "text",
  type = "text",
  placeholder = "",
}) => {
    return (
        <div className="rounded-sm">
            <IonLabel position="floating" className="!text-2xl font-bold">
                {label}
            </IonLabel>
            <IonInput
                type={type}
                placeholder={placeholder}
                className="bg-[#EBF2F5] w-full px-3 py-2 rounded"
            />
        </div>
    );
};

export default Input;
