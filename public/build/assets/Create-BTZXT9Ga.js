import{r as S,j as e,a as w,Y as U,y as M}from"./app-DUEQLvTM.js";import{A as _,B as p,a as P,b as F,c as Q,T as H,d as R,e as W,f as Y}from"./AuthenticatedLayout-COXNtWXB.js";import{Q as G,u as J,F as K,L as O,a as l,b as i,c as d,d as n,e as o,T as X,E as Z,f as T,S as $,U as ee,t as se}from"./Editor-DOX6G93K.js";import{z as t}from"./index-DXqQCM1T.js";import{B as c}from"./index-BYqAemno.js";import{C as h,a as m,b as x,c as D,d as u}from"./card-A4W-d4Wv.js";import{I as re}from"./input-ClKJEmcF.js";import{C as ae,S as f,a as b,b as v,c as q,d as g}from"./select-D_gLtYIN.js";import"./Combination-DjwCUALW.js";import"./react-icons.esm-DfoNmadX.js";import"./index-C7kUm9hz.js";import"./index-CcAxupep.js";import"./createLucideIcon-BF7QCm3g.js";import"./dropdown-menu-CpX9FYd-.js";import"./index-hu-_gH_u.js";import"./index-Dak6fHyp.js";import"./label-Cj_WYh4l.js";import"./BlogEditor-CwSxDds6.js";import"./index-DzGXFLC_.js";G.import("delta");const ye=({categories:C})=>{const[y,N]=S.useState(!1),[j,k]=S.useState([]),E=t.object({title:t.string().min(1,"Title is required").max(100,"Title must be 100 characters or less"),content:t.string().min(1,"Content is required"),description:t.string().min(1,"Description is required").max(180,"Description must be 180 or less characters"),category:t.string({required_error:"Please select a Post Category"}),status:t.string().min(1,"Status is required"),featured:t.boolean().default(!1).optional(),subcategory:j.length?t.string({required_error:"Please select any subcategory"}):t.string().optional()}),a=J({mode:"onChange",resolver:se(E),defaultValues:{title:"",description:"",content:"",category:"",subcategory:"",status:"draft",featured:!1}}),V=r=>{const s=C.find(A=>A.name===r);s.children&&s.children.length?(k(s.children),a.setValue("category",s.name)):(a.setValue("category",s.name),a.setValue("subcategory",""),k([]))},B=r=>{N(!0)},z=r=>{N(!1)},I=r=>{a.setValue("content",r)};function L(r){M.post(route("admin.posts.store"),r,{onStart:B,onFinish:z,onError:s=>{s.title&&a.setError("title",{message:s.title}),s.description&&a.setError("description",{message:s.description}),s.content&&a.setError("content",{message:s.content}),s.category&&a.setError("category",{message:s.category}),s.status&&a.setError("status",{message:s.status}),s.featured&&a.setError("featured",{message:s.featured}),s.subcategory&&a.setError("subcategory",{message:s.subcategory})}})}return e.jsxs(_,{header:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx(P,{asChild:!0,children:e.jsx(w,{href:route("admin.dashboard"),children:"Dashboard"})})}),e.jsx(F,{}),e.jsx(p,{children:e.jsx(P,{asChild:!0,children:e.jsx(w,{href:route("admin.posts"),children:"Posts"})})}),e.jsx(F,{}),e.jsx(p,{children:e.jsx(Q,{children:"Add Post"})})]}),children:[e.jsx(U,{title:"Create Post"}),e.jsx(K,{...a,children:e.jsx("form",{onSubmit:a.handleSubmit(L),children:e.jsxs("div",{className:"mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(c,{variant:"outline",size:"icon",className:"h-7 w-7",children:[e.jsx(ae,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Back"})]}),e.jsx("h1",{className:"flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0",children:e.jsx("span",{className:"text-gray-400",children:"Draft Post"})}),e.jsxs("div",{className:"hidden items-center gap-2 md:ml-auto md:flex",children:[e.jsx(c,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(c,{size:"sm",type:"submit",disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Post"})})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[e.jsx("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:e.jsxs(h,{"x-chunk":"dashboard-07-chunk-0",children:[e.jsxs(m,{children:[e.jsx(x,{children:"Post Details"}),e.jsx(D,{children:e.jsx("span",{className:"text-gray-400",children:"Draft Post"})})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{className:"grid gap-3",children:e.jsx(l,{control:a.control,name:"title",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Title"}),e.jsx(n,{children:e.jsx(re,{placeholder:"Title",type:"text",className:"w-full",...r})}),e.jsx(o,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(l,{control:a.control,name:"description",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Description"}),e.jsx(n,{children:e.jsx(X,{id:"description",placeholder:"Description",className:"min-h-32",...r})}),e.jsx(o,{})]})})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(l,{control:a.control,name:"content",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Content"}),e.jsx(n,{children:e.jsx(Z,{onChange:I})}),e.jsx(T,{children:"Write your post content here."}),e.jsx(o,{})]})})})]})})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:[e.jsxs(h,{"x-chunk":"dashboard-07-chunk-2",children:[e.jsx(m,{children:e.jsx(x,{children:"Post Category"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6 sm:grid-cols-3",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(l,{control:a.control,name:"category",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Category"}),e.jsxs(f,{onValueChange:s=>{r.onChange(s),V(s)},defaultValue:r.value,children:[e.jsx(n,{children:e.jsx(b,{children:e.jsx(v,{placeholder:"Select a Post Category"})})}),e.jsx(q,{children:C.map(s=>e.jsx(g,{value:s.name,children:s.name},s.id))})]}),e.jsx(o,{})]})}),j.length?e.jsx(l,{control:a.control,name:"subcategory",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Sub Category"}),e.jsxs(f,{onValueChange:r.onChange,defaultValue:r.value,required:!0,children:[e.jsx(n,{children:e.jsx(b,{children:e.jsx(v,{placeholder:"Select a Post Category"})})}),e.jsx(q,{children:j.map(s=>e.jsx(g,{value:s.name,children:s.name},s.id))})]}),e.jsx(o,{})]})}):""]})})})]}),e.jsxs(h,{"x-chunk":"dashboard-07-chunk-3",children:[e.jsx(m,{children:e.jsx(x,{children:"Post Status"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(l,{control:a.control,name:"status",render:({field:r})=>e.jsxs(i,{children:[e.jsx(d,{children:"Status"}),e.jsxs(f,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(n,{children:e.jsx(b,{id:"status","aria-label":"Select status",children:e.jsx(v,{placeholder:"Select status"})})}),e.jsxs(q,{children:[e.jsx(g,{value:"draft",children:"Draft"}),e.jsx(g,{value:"published",children:"Active"}),e.jsx(g,{value:"archived",children:"Archived"})]})]}),e.jsx(o,{})]})})})})})]}),e.jsxs(h,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-5",children:[e.jsx(m,{children:e.jsx(x,{children:"Mark Post as Featured"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(l,{control:a.control,name:"featured",render:({field:r})=>e.jsxs(i,{className:"flex flex-row items-center justify-between",children:[e.jsx(T,{children:"Marking this post will display it in top first section all other posts will be un marked as featured."}),e.jsx(n,{children:e.jsx($,{checked:r.value,onCheckedChange:r.onChange})}),e.jsx(o,{})]})})})})})]}),e.jsxs(h,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-4",children:[e.jsxs(m,{children:[e.jsx(x,{children:"Post Image"}),e.jsx(D,{children:"Upload featured image for this post."})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx("img",{alt:"Post image",className:"aspect-square w-full rounded-md object-cover",height:"300",src:"/placeholder.svg",width:"300"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(H,{children:e.jsxs(R,{children:[e.jsx(W,{asChild:!0,children:e.jsxs("button",{className:"flex aspect-square w-full h-10 items-center justify-center rounded-md border border-dashed",children:[e.jsx(ee,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"sr-only",children:"Upload"})]})}),e.jsx(Y,{side:"bottom",children:"Click to upload image"})]})})})]})})]})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[e.jsx(c,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(c,{size:"sm",children:"Save Product"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
                .quill-shadcn .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid hsl(var(--border));
                    padding: 0.5rem;
                }
                .quill-shadcn .ql-container.ql-snow {
                    border: none;
                }
                .quill-shadcn .ql-editor {
                    min-height: 200px;
                    font-size: 1rem;
                    line-height: 1.5;
                    padding: 1rem;
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-editor.ql-blank::before {
                    color: hsl(var(--muted-foreground));
                    font-style: normal;
                }
                .quill-shadcn .ql-formats button {
                    height: 28px;
                    width: 28px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-formats button:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats button.ql-active {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats .ql-picker {
                    color: hsl(var(--foreground));
                }
                .quill-shadcn .ql-formats .ql-picker:hover .ql-picker-label {
                    color: hsl(var(--accent-foreground));
                }
                .quill-shadcn .ql-formats .ql-picker-options {
                    background-color: hsl(var(--background));
                    border: 1px solid hsl(var(--border));
                    border-radius: 4px;
                    padding: 0.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .quill-shadcn .ql-formats .ql-picker-item {
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }
                .quill-shadcn .ql-formats .ql-picker-item:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
            `})]})};export{ye as default};
