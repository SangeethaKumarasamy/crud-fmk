import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { App } from './App';
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

export function Editbouquet() {
    const { id } = useParams();

    const [type, setType] = useState();
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/bouquet/${id}`,
            {
                method: "GET"
            })
            .then((data) => data.json())
            .then((bq) => setType(bq));
    }, [id]);
    console.log(type);
    return type ? <Updatedbouquet type={type} /> : " ";
}
function Updatedbouquet({ type }) {
    const sty = { width: "60%", margin: "1rem" }
    const navigate = useNavigate();
    // const [name, setName] = useState(type.name);
    // const [explaination, setExplaination] = useState(type.explaination);
    // const [image, setImage] = useState(type.image);
    // const [image1, setImage1] = useState(type.image1);
    // const [image2, setImage2] = useState(type.image2);
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: type.name,
            explaination: type.explaination,
            image: type.image,
            image1: type.image1,
            image2: type.image2,

        },
        validationSchema: formValidationSchema,
        onSubmit: (update) => {
            console.log("onsubmit", update);
            editedbouquet(update)
        },
    });
    const editedbouquet = (update) => {
        // const update = {
        //     name,
        //     explaination,
        //     image,
        //     image1,
        //     image2
        // };
        console.log(update);

        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/bouquet/${type.id}`,
            {
                method: "PUT",
                body: JSON.stringify(update),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => navigate("/bouquet"));

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
                <Button variant="outlined" type="submit">Save</Button>
            </form>
        </div>
    );
}
export default App;