import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { useFormik } from "formik";

const formValidationSchema = yup.object(
    {
        name: yup.string().required(),
        explaination: yup.string().required(),
        image: yup.string().required(),
        image1: yup.string().required(),
        image2: yup.string().required()
    }
);

export function Add() {
    const sty = { width: "60%", margin: "1rem" }
    const navigate = useNavigate();
    // const [name, setName] = useState();
    // const [explaination, setExplaination] = useState();
    // const [image, setImage] = useState();
    // const [image1, setImage1] = useState();
    // const [image2, setImage2] = useState();
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            explaination: "",
            image: "",
            image1: "",
            image2: "",

        },
        validationSchema: formValidationSchema,
        onSubmit: (newbouquet) => {
            console.log("onsubmit", newbouquet);
            addbouquet(newbouquet)
        },
    });
    const addbouquet = (newbouquet) => {
        // const newbouquet = {
        //     name,
        //     explaination,
        //     image,
        //     image1,
        //     image2
        // };
        console.log(newbouquet);
        fetch("https://6166c4e813aa1d00170a6717.mockapi.io/bouquet",
            {
                method: "POST",
                body: JSON.stringify(newbouquet),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            .then(() => navigate("/bouquet"))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField

                    style={sty}
                    id="name"
                    name="name"
                    value={values.name}
                    label="Bouquet Name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                    // onChange={(event) => setName(event.target.value)}
                    placeholder="Bouquet Name" /><br />
                <TextField


                    id="explaination"
                    name="explaination"
                    style={sty}
                    value={values.explaination}
                    label="Description"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.explaination && touched.explaination}
                    helperText={errors.explaination}
                    // onChange={(event) => setRate(event.target.value)}
                    placeholder="Description" /><br />
                <TextField


                    id="image"
                    name="image"
                    label="Picture-1"
                    style={sty}
                    value={values.image}
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.image && touched.image}
                    helperText={errors.image}
                    // onChange={(event) => setMilage(event.target.value)}
                    placeholder="Image link" /><br />
                <TextField


                    id="image1"
                    name="image1"
                    label="Picture-2"
                    style={sty}
                    value={values.image1}
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.image1 && touched.image1}
                    helperText={errors.image1}
                    // onChange={(event) => setPic(event.target.value)}
                    placeholder="Image Link" /><br />

                <TextField


                    id="image2"
                    name="image2"
                    label="Picture-3"
                    style={sty}
                    value={values.image2}
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.image2 && touched.image2}
                    helperText={errors.image2}
                    // onChange={(event) => setPic(event.target.value)}
                    placeholder="Image Link" /><br />
                <Button variant="outlined" type="submit">ADD</Button>
            </form>

        </div>
    );
}