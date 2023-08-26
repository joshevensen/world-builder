import { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";

import ScreenWrapper from "../../../general/wrappers/ScreenWrapper";
import { TemplateCreateProp } from "../../../navigation/MainNavigation";
import LibCard from "../../../general/library/Card";
import LibFormButtons from "../../../general/library/FormButtons";
import { useAppDispatch, useAppSelector } from "../../../general/helpers/hooks";
import { ITemplate } from "../../../data/interfaces/template.interface";
import { CategoriesContext } from "../../../store/context/categories.context";
import { selectActiveWorld } from "../../../store/redux/worlds.reducer";
import { addTemplate } from "../../../store/redux/templates.reducer";
import LibFormField from "../../../general/library/FormField";
import LibFormInput from "../../../general/library/FormInput";

const TemplateCreateScreen: FC<TemplateCreateProp> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const categories = useContext(CategoriesContext);
  const world = useAppSelector(selectActiveWorld);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITemplate>({
    defaultValues: {
      world_id: world?.id,
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

  function cancel() {
    navigation.goBack();
  }

  const [value, setValue] = useState(null);

  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ];

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
            isMultiline={true}
            placeholder="optional"
          />
        </LibFormField>

        <LibFormButtons onSave={handleSubmit(save)} onCancel={cancel} />
      </LibCard>
    </ScreenWrapper>
  );
};

export default TemplateCreateScreen;
