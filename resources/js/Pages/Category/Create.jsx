import React, {useState} from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import "quill/dist/quill.snow.css";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Link, Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

const Create = () => {
    const [isLoading, setIsLoading] = useState(false);

    const FormSchema = z.object({
        name: z
            .string()
            .min(1, "Name is required")
            .max(10, "Name must be 10 characters or less"),
    });

    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
        },
    });

    const handleFormProcessing = (response) => {
        setIsLoading(true);
    };

    const handleFormProcessed = (response) => {
        setIsLoading(false);
    };

    function onSubmit(values) {
        router.post(route("admin.categories.store"), values, {
            onStart: handleFormProcessing,
            onFinish: handleFormProcessed,
            onError: (errors) => {
                if (errors.name) form.setError("name", {
                    message: errors.name
                });
            }
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route("admin.dashboard")}>
                                Dashboard
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={route("admin.posts")}>Posts</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Add Post</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            }
        >
            <Head title="Create Category" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>

                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button
                                    size="sm"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                                            Saving
                                        </>
                                    ) : (
                                        <>Save</>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Create Category</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Name
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Name"
                                                                    type="text"
                                                                    className="w-full"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button type="submit" size="sm">Save</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </AuthenticatedLayout>
    );
};

export default Create;
