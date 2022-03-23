import animalApi from "api/animalApi";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ScreenAnimalDetail.module.css";
import { AiOutlineLoading } from "react-icons/ai";
const ScreenAnimalDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    if (!(params?.id > 0)) {
      return;
    }
    const fetchAnimal = async () => {
      setIsLoading(true);
      try {
        const response = await animalApi.getAnimalById(params.id);
        const json = await response.json();
        setAnimal(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnimal();
  }, [params.id]);

  const loadingTemplate = () => {
    return <div>Loading ...</div>;
  };

  const goBack = () => {
    navigate(-1);
  };
  const handleOnClickCancel = (event) => {
    goBack();
  };

  const animalTemplate = () => {
    if (!animal) {
      return null;
    }

    const initialValues = {
      id: animal.id,
      name: animal?.name,
      thumbnailUrl: animal.thumbnailUrl,
    };

    const onSubmit = async (values, { setSubmitting }) => {
      console.log(values);

      try {
        const response = await animalApi.updateAnimal(values.id, values);
        const status = await response.status;
        if (status === 200) {
          goBack();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <div className={styles.content}>
        <img src={animal?.thumbnailUrl} alt="Animal"></img>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.animalForm}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <div>
                <button type="button" onClick={handleOnClickCancel}>
                  Cancel
                </button>
                <button type="submit">
                  Submit
                  {isSubmitting && <AiOutlineLoading />}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h3>Animal Detail {params.id}</h3>
      {isLoading ? loadingTemplate() : animalTemplate()}
    </div>
  );
};

export default ScreenAnimalDetail;
