import React, { useEffect } from "react";
import { Button } from "@strapi/design-system";
import { Eye } from "@strapi/icons";
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import axios from 'axios'

const Preview = (props) => {
    const { modifiedData } = useCMEditViewDataManager()

    console.log(modifiedData.id)

    const getElements = () => {
        var form = document.querySelector('form');
        var elements = form.elements;

        console.log(elements)

        // for (i = 0; i < elements.length; i++) {
        //     // if (form.elements[i].type == "text" && form.elements[i].value == ""){
        //     //     alert("Please fill out all fields.")
        //     //     form.elements[i].focus()
        //     //     break
        //     // }
        //     console.log(elements[i].id)
        // }
    }

    const handleClick = async (e) => {
        // e.preventDefault()
        console.log(modifiedData.id)
        // getElements()
        // await fetch(`http://localhost:8000/api/products/${modifiedData.id}`, {
        //     method: "put",
        //     // body: {
        //     //     data: {
        //     //         id: modifiedData.id, 
        //     //         preview: modifiedData
        //     //     }
        //     // }
        // }).then((res) => console.log(res)).catch((err) => console.log(err))

        await axios.put(`http://localhost:1337/api/pages/${modifiedData.id}`, {
            "data": {
                "preview": modifiedData
            }
        }).then((res) => {
            console.log(res)
            alert(`Successfully generated the Live Preview. Check the console for details.`)
            window.open(`http://127.0.0.1:8787/demo/${modifiedData.slug}?preview=true`)
        }).catch((err) => {
            alert("Failed to generate the Live Preview. Check the console for details.")
            console.error(err)
        })


        // await axios.post(`http://localhost:1337/api/previews`, {
        //     "data": modifiedData
        // }).then((res) => {
        //     console.log(res)
        //     alert(`Successfully generated the Live Preview. Check the console for details.`)
        //     // window.open(`http://127.0.0.1:8787/preview/products-strapi/${modifiedData.id}`)
        // }).catch((err) => {
        //     alert("Failed to generat the Live Preview. Check the console for details.")
        //     console.error(err)
        // })
    }
    return <Button variant="primary" startIcon={<Eye />} onClick={handleClick}>
        Live Preview
    </Button>
}

export default Preview