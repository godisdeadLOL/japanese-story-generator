import { createStandaloneToast } from "@chakra-ui/react";
import axios from "axios";

axios.interceptors.response.use(
    (config) => config,
    (error) => {
        const errorCode = error.response?.data?.detail || error.message

        const { toast } = createStandaloneToast()
        toast({ title: "Generation error", description: errorCode, status: 'error', duration: 5000, position: 'bottom-right' });
    }
)