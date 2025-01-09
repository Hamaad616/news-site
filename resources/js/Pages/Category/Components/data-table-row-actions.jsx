import {EllipsisIcon} from "lucide-react"
import {Button} from "@/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import {labels} from "../data/data"
import {categorySchema} from "../data/schema"
import {Link} from "@inertiajs/react"

export function DataTableRowActions({
                                        row,
                                    }) {
    const task = categorySchema.parse(row.original)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <EllipsisIcon className="h-4 w-4"/>
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <Link href={route("admin.categories.show", task.id)}>
                    <DropdownMenuItem>
                        Edit
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
