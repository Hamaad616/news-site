import{r as S,j as e,S as U,x as w,A as M}from"./app-tLm7qpe1.js";import{A as _,T as Q,d as H,e as R,f as W,B as p,a as P,b as F,c as G}from"./AuthenticatedLayout-B5RZwRh4.js";import{u as J,F as K,L as O,a as t,b as l,c as d,d as i,e as n,f as T,t as X}from"./form-DTB9TBYD.js";import{B as c}from"./index-BobDOfst.js";import{C as h,a as m,b as x,c as D,d as u}from"./card-n2o9xv5z.js";import{I as Y}from"./input-Bh2s4eXL.js";import{S as f,a as b,b as v,c as q,d as j}from"./select-Cw0-j1WU.js";import{T as Z,E as $,S as ee,U as se,Q as re}from"./Editor-DInj6JY0.js";import{C as ae}from"./chevron-left-DIVOKLNf.js";import{o as te,s as o,b as le}from"./types-BrMfgacx.js";import"./Combination-pQLuAezX.js";import"./floating-ui.react-dom-SOIdTh7T.js";import"./index-CO324Um3.js";import"./index-DEKzZK78.js";import"./createLucideIcon-rGbcrS42.js";import"./dropdown-menu-DPhl47bm.js";import"./index-DeQC8O_x.js";import"./index-Bz7sor7O.js";import"./label-Bwq5dLay.js";import"./index-D_U9OgGA.js";import"./BlogEditor-BDGF4VAh.js";re.import("delta");const we=({categories:C})=>{const[y,N]=S.useState(!1),[g,k]=S.useState([]),E=te({title:o().min(1,"Title is required").max(100,"Title must be 100 characters or less"),content:o().min(1,"Content is required"),description:o().min(1,"Description is required").max(180,"Description must be 180 or less characters"),category:o({required_error:"Please select a Post Category"}),status:o().min(1,"Status is required"),featured:le().default(!1).optional(),subcategory:g.length?o({required_error:"Please select any subcategory"}):o().optional()}),a=J({mode:"onChange",resolver:X(E),defaultValues:{title:"",description:"",content:"",category:"",subcategory:"",status:"draft",featured:!1}}),V=r=>{const s=C.find(z=>z.name===r);s.children&&s.children.length?(k(s.children),a.setValue("category",s.name)):(a.setValue("category",s.name),a.setValue("subcategory",""),k([]))},B=r=>{N(!0)},A=r=>{N(!1)},I=r=>{a.setValue("content",r)};function L(r){M.post(route("admin.posts.store"),r,{onStart:B,onFinish:A,onError:s=>{s.title&&a.setError("title",{message:s.title}),s.description&&a.setError("description",{message:s.description}),s.content&&a.setError("content",{message:s.content}),s.category&&a.setError("category",{message:s.category}),s.status&&a.setError("status",{message:s.status}),s.featured&&a.setError("featured",{message:s.featured}),s.subcategory&&a.setError("subcategory",{message:s.subcategory})}})}return e.jsxs(_,{header:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx(P,{asChild:!0,children:e.jsx(w,{href:route("admin.dashboard"),children:"Dashboard"})})}),e.jsx(F,{}),e.jsx(p,{children:e.jsx(P,{asChild:!0,children:e.jsx(w,{href:route("admin.posts"),children:"Posts"})})}),e.jsx(F,{}),e.jsx(p,{children:e.jsx(G,{children:"Add Post"})})]}),children:[e.jsx(U,{title:"Create Post"}),e.jsx(K,{...a,children:e.jsx("form",{onSubmit:a.handleSubmit(L),children:e.jsxs("div",{className:"mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(c,{variant:"outline",size:"icon",className:"h-7 w-7",children:[e.jsx(ae,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Back"})]}),e.jsx("h1",{className:"flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0",children:e.jsx("span",{className:"text-gray-400",children:"Draft Post"})}),e.jsxs("div",{className:"hidden items-center gap-2 md:ml-auto md:flex",children:[e.jsx(c,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(c,{size:"sm",type:"submit",disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Post"})})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[e.jsx("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:e.jsxs(h,{"x-chunk":"dashboard-07-chunk-0",children:[e.jsxs(m,{children:[e.jsx(x,{children:"Post Details"}),e.jsx(D,{children:e.jsx("span",{className:"text-gray-400",children:"Draft Post"})})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:a.control,name:"title",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Title"}),e.jsx(i,{children:e.jsx(Y,{placeholder:"Title",type:"text",className:"w-full",...r})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:a.control,name:"description",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Description"}),e.jsx(i,{children:e.jsx(Z,{id:"description",placeholder:"Description",className:"min-h-32",...r})}),e.jsx(n,{})]})})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(t,{control:a.control,name:"content",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Content"}),e.jsx(i,{children:e.jsx($,{onChange:I})}),e.jsx(T,{children:"Write your post content here."}),e.jsx(n,{})]})})})]})})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:[e.jsxs(h,{"x-chunk":"dashboard-07-chunk-2",children:[e.jsx(m,{children:e.jsx(x,{children:"Post Category"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6 sm:grid-cols-3",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{control:a.control,name:"category",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Category"}),e.jsxs(f,{onValueChange:s=>{r.onChange(s),V(s)},defaultValue:r.value,children:[e.jsx(i,{children:e.jsx(b,{children:e.jsx(v,{placeholder:"Select a Post Category"})})}),e.jsx(q,{children:C.map(s=>e.jsx(j,{value:s.name,children:s.name},s.id))})]}),e.jsx(n,{})]})}),g.length?e.jsx(t,{control:a.control,name:"subcategory",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Sub Category"}),e.jsxs(f,{onValueChange:r.onChange,defaultValue:r.value,required:!0,children:[e.jsx(i,{children:e.jsx(b,{children:e.jsx(v,{placeholder:"Select a Post Category"})})}),e.jsx(q,{children:g.map(s=>e.jsx(j,{value:s.name,children:s.name},s.id))})]}),e.jsx(n,{})]})}):""]})})})]}),e.jsxs(h,{"x-chunk":"dashboard-07-chunk-3",children:[e.jsx(m,{children:e.jsx(x,{children:"Post Status"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:a.control,name:"status",render:({field:r})=>e.jsxs(l,{children:[e.jsx(d,{children:"Status"}),e.jsxs(f,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(i,{children:e.jsx(b,{id:"status","aria-label":"Select status",children:e.jsx(v,{placeholder:"Select status"})})}),e.jsxs(q,{children:[e.jsx(j,{value:"draft",children:"Draft"}),e.jsx(j,{value:"published",children:"Active"}),e.jsx(j,{value:"archived",children:"Archived"})]})]}),e.jsx(n,{})]})})})})})]}),e.jsxs(h,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-5",children:[e.jsx(m,{children:e.jsx(x,{children:"Mark Post as Featured"})}),e.jsx(u,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:a.control,name:"featured",render:({field:r})=>e.jsxs(l,{className:"flex flex-row items-center justify-between",children:[e.jsx(T,{children:"Marking this post will display it in top first section all other posts will be un marked as featured."}),e.jsx(i,{children:e.jsx(ee,{checked:r.value,onCheckedChange:r.onChange})}),e.jsx(n,{})]})})})})})]}),e.jsxs(h,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-4",children:[e.jsxs(m,{children:[e.jsx(x,{children:"Post Image"}),e.jsx(D,{children:"Upload featured image for this post."})]}),e.jsx(u,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx("img",{alt:"Post image",className:"aspect-square w-full rounded-md object-cover",height:"300",src:"/placeholder.svg",width:"300"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(Q,{children:e.jsxs(H,{children:[e.jsx(R,{asChild:!0,children:e.jsxs("button",{className:"flex aspect-square w-full h-10 items-center justify-center rounded-md border border-dashed",children:[e.jsx(se,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"sr-only",children:"Upload"})]})}),e.jsx(W,{side:"bottom",children:"Click to upload image"})]})})})]})})]})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[e.jsx(c,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(c,{size:"sm",children:"Save Product"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
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
            `})]})};export{we as default};
