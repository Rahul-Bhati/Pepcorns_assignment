import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InvestmentSummary from "./InvestmentSummary"
import { TriangleAlert } from "lucide-react"

const PitchUpdateTab = () => {
    return (
        <div className='md:px-[13%] my-3'>
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="account" className="text-xl">Pitch</TabsTrigger>
                    <TabsTrigger value="password" className="text-xl">Update</TabsTrigger>
                </TabsList>
                <hr className="my-2" />
                <div className="flex justify-center items-center gap-2 text-[12px]"><TriangleAlert className="text-yellow-300" size="12px" /> <p>Campaign closed on October 1, 2024. Information displayed may not be up-to-date.</p></div>
                <hr className="my-2" />
                <TabsContent value="account">
                    <InvestmentSummary />
                </TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>

    )
}

export default PitchUpdateTab