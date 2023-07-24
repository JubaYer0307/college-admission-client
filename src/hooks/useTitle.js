import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title= `Admission | ${title} `;
    }, [title])
}

export default useTitle;