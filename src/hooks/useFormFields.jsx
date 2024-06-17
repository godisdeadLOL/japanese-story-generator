import { useState } from "preact/hooks"

function useFormFields(defaultValues) {
    const [values, setValues] = useState(defaultValues)

    const register = (name) => {

        const onChange = (e) => {
            setValues({ ...values, [name]: !e.target ? e : e.target.value })
        }

        const onBlur = () => {
            // validate?
        }

        return { value: values[name], onChange, onBlur }
    }

    return {
        values, register
    }
}

export default useFormFields