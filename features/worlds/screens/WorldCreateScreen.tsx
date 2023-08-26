import { FC } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../../general/helpers/hooks";
import { WorldCreateProp } from "../../../navigation/WorldNavigation";
import { addWorld } from "../../../store/worlds.reducer";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import LibCard from "../../../general/library/Card";
import LibFormButtons from "../../../general/library/FormButtons";
import LibFormField from "../../../general/library/FormField";
import { IWorld } from "../../../data/interfaces/world.interface";
import LibFormInput from "../../../general/library/FormInput";

const WorldCreateScreen: FC<WorldCreateProp> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorld>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function save(formData: IWorld) {
    dispatch(addWorld(formData));
    navigation.goBack();
  }

  function cancel() {
    navigation.goBack();
  }

  return (
    <ScreenWrapper>
      <LibCard>
        <LibFormField label="Name" errorMessage={errors.name?.message}>
          <LibFormInput
            name="name"
            control={control}
            rules={{
              required: "Name is required",
            }}
            errors={errors.name}
          />
        </LibFormField>

        <LibFormField
          label="Description"
          errorMessage={errors.description?.message}
        >
          <LibFormInput
            name="description"
            control={control}
            rules={{
              required: false,
            }}
            errors={errors.description}
            placeholder="optional"
            isMultiline={true}
          />
        </LibFormField>

        <LibFormButtons onSave={handleSubmit(save)} onCancel={cancel} />
      </LibCard>
    </ScreenWrapper>
  );
};

export default WorldCreateScreen;
