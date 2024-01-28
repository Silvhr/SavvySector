"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const TanstackProvider = ({children} : {children: React.ReactNode}) =>{
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* TODO: IDK why this is broken ¯\_(ツ)_/¯, but it is only devtools*/}
            {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        </QueryClientProvider>
    );
}

export default TanstackProvider