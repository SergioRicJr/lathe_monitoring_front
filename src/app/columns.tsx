// "use client"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { ColumnDef } from "@tanstack/react-table"
// import { MoreVertical } from "lucide-react"
// import { z } from 'zod'

// export const ZodPiece = z.object({
//     user_id: z.number(),
//     piece_id: z.number(),
//     initial_dimension: z.number(),
//     desired_dimension: z.number(),
//     actual_dimension: z.number(),
//     start_datetime: z.string(),
//     end_datetime: z.string()
// })
 
// export const pieceColumns: ColumnDef<z.infer<typeof ZodPiece>>[] = [
//     {
//        accessorKey: 'piece_id',
//        header: 'Id',
//     },
//     {
//         accessorKey: 'user_id',
//         header: 'Usuário'
//     },
//     {
//         accessorKey: 'initial_dimension',
//         header: 'Dimensão inicial'
//     },
//     {
//         accessorKey: 'desired_dimension',
//         header: 'Dimensão desejada'
//     },
//     {
//         accessorKey: 'actual_dimension',
//         header: 'Dimensão atual'
//     },
//     {
//         accessorKey: 'start_datetime',
//         header: 'Início'
//     },
//     {
//       accessorKey: 'end_datetime',
//       header: 'Fim'
      
//     },
//     {
//         id: "actions",
//         enableHiding: false,
//         cell: ({ row }) => {  
//           return (
//             <div className="flex gap-4 justify-center">
                
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" className="h-8 w-8 p-0">
//                       <span className="sr-only">Open menu</span>
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem>Excluir</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//           )
//         },
//       },
// ]