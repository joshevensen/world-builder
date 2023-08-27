import { FC, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../../general/helpers/hooks";
import { WorldCreateProp } from "../../../navigation/WorldNavigation";
import { addWorld } from "../../../store/worlds.reducer";
import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { IWorld } from "../../../data/interfaces/world.interface";
import LibInput from "../../../general/library/Input";
import LibButton from "../../../general/library/Button";

const WorldCreateScreen: FC<WorldCreateProp> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <LibButton mode="flat" onPress={handleSubmit(save)}>
          Done
        </LibButton>
      ),
    });
  }, []);

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

  return (
    <ScreenWrapper>
      <LibInput
        label="Name"
        name="name"
        control={control}
        rules={{
          required: "Name is required",
        }}
        errors={errors.name}
      />

      <LibInput
        label="Description"
        name="description"
        control={control}
        rules={{
          required: false,
        }}
        errors={errors.description}
        placeholder="optional"
        isMultiline={true}
        includeMargins={true}
      />
    </ScreenWrapper>
  );
};

export default WorldCreateScreen;
