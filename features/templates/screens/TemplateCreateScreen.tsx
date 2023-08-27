import { FC, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateCreateProp } from "../../../navigation/MainNavigation";
import { useAppDispatch, useAppSelector } from "../../../general/helpers/hooks";
import { ITemplate } from "../../../data/interfaces/template.interface";
import { selectActiveWorld } from "../../../store/worlds.reducer";
import { addTemplate } from "../../../store/templates.reducer";
import LibInput from "../../../general/library/Input";
import categories from "../../../data/static/categories";
import LibButton from "../../../general/library/Button";

const TemplateCreateScreen: FC<TemplateCreateProp> = ({ navigation }) => {
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

  const world = useAppSelector(selectActiveWorld);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITemplate>({
    defaultValues: {
      world_id: world!.id,
      category_id: categories[0].id,
      name: "",
      description: "",
      fields: [],
    },
  });

  function save(formData: ITemplate) {
    dispatch(addTemplate(formData));
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
        isMultiline={true}
        includeMargins={true}
        placeholder="optional"
      />
    </ScreenWrapper>
  );
};

export default TemplateCreateScreen;
