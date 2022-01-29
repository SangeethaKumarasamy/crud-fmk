import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Page } from './Page';
import Button from '@mui/material/Button';

export function Flowers() {
    const navigate = useNavigate();
    const [flowerbouquet, setFlowerbouquet] = useState([]);
    const getbouquet = () => {
        fetch("https://6166c4e813aa1d00170a6717.mockapi.io/bouquet")
            .then((data) => data.json())
            .then((fl) => setFlowerbouquet(fl));
    }

    useEffect(getbouquet, []);

    console.log(flowerbouquet);
    const deletebouquet = (id) => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/bouquet/${id}`,
            {
                method: "DELETE"
            })
            .then(() => getbouquet());
    }

    return (
        <div>

            {flowerbouquet.map(({ name, explaination, image, image1, image2, id }) => <Page
                name={name}
                explain={explaination}
                image={image}
                image1={image1}
                image2={image2}
                id={id}
                deletebutton={<Button variant="outlined" onClick={() => deletebouquet(id)}>Delete</Button>}
                editbutton={<Button variant="outlined"
                    onClick={() => {
                        navigate("/bouquet/edit/" + id);
                    }}>Edit</Button>}
                infobutton={<Button variant="outlined"
                    onClick={() => {
                        navigate("/bouquet/detail/" + id)
                    }}>info</Button>} />

            )}
        </div>
    );
}