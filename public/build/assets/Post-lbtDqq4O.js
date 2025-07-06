import{r as g,j as e,S as Z,x as u,A as L}from"./app-tLm7qpe1.js";import{A as ee,T as se,d as re,e as ae,f as le,B as k,a as A,b as U,c as ne}from"./AuthenticatedLayout-B5RZwRh4.js";import{u as R,F as ie,L as M,a as t,b as o,c as h,d as c,e as x,f as te,t as _}from"./form-DTB9TBYD.js";import{B as n}from"./index-BobDOfst.js";import{C as j,a as y,b as p,c as N,d as C}from"./card-n2o9xv5z.js";import{I as H}from"./input-Bh2s4eXL.js";import{S,a as w,b as F,c as P,d as f}from"./select-Cw0-j1WU.js";import{T as oe,E as ce,S as de,U as O}from"./Editor-DInj6JY0.js";import{C as he}from"./chevron-left-DIVOKLNf.js";import{c as me}from"./createLucideIcon-rGbcrS42.js";import{o as ue,s as m,b as xe}from"./types-BrMfgacx.js";import"./Combination-pQLuAezX.js";import"./floating-ui.react-dom-SOIdTh7T.js";import"./index-CO324Um3.js";import"./index-DEKzZK78.js";import"./dropdown-menu-DPhl47bm.js";import"./index-DeQC8O_x.js";import"./index-Bz7sor7O.js";import"./label-Bwq5dLay.js";import"./index-D_U9OgGA.js";import"./BlogEditor-BDGF4VAh.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=me("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ge=b=>b===1,Ue=({categories:b=[],post:a,image:W})=>{var B;const[je,pe]=g.useState(a.content??""),[d,E]=g.useState(!1),[I,T]=g.useState(a.subcategories||[]),[v,$]=g.useState(W??null);g.useRef();const V=ue({title:m().min(1,"Title is required").max(100,"Title must be 100 characters or less"),content:m().min(1,"Content is required"),description:m().min(1,"Description is required").max(180,"Description should be maximum 180 characters"),slug:m().min(1,"Slug is required"),category:m({required_error:"Please select a Post Category"}),status:m().min(1,"Status is required"),featured:xe().optional(),subcategory:m().optional()}),l=R({mode:"onchange",resolver:_(V),defaultValues:{title:a.title??"",description:a.description??"",content:a.content??"",category:a.category.name??"",status:a.status??"draft",slug:a.slug??"draft",featured:ge(a.featured)??!1,subcategory:((B=a.subcategory)==null?void 0:B.name)??""}}),G=s=>{const r=b.find(i=>i.name===s);r.children&&r.children.length?(T(r.children),l.setValue("category",r.name)):(l.setValue("category",s),l.setValue("subcategory",""),T([]))},q=R({resolver:_(V),defaultValues:{image:a.image??null}}),D=s=>{E(!0)},z=s=>{E(!1)},J=s=>{l.setValue("content",s)};function K(s){L.patch(route("admin.posts.update",a.id),s,{onStart:D,onFinish:z,onError:r=>{Y(r)}})}const X=()=>{const s=q.getValues("image");if(!s)return;const r=new FormData;r.append("image",s),L.post(route("admin.posts.image.update",a.id),r,{onStart:D,onFinish:z,onError:i=>{i.image&&q.setError("image",{message:i.image})}})},Y=s=>{Object.keys(s).forEach(r=>{l.setError(r,{message:s[r]})})};return e.jsxs(ee,{header:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(A,{asChild:!0,children:e.jsx(u,{href:route("admin.dashboard"),children:"Dashboard"})})}),e.jsx(U,{}),e.jsx(k,{children:e.jsx(A,{asChild:!0,children:e.jsx(u,{href:route("admin.posts"),children:"Posts"})})}),e.jsx(U,{}),e.jsx(k,{children:e.jsx(ne,{children:"Add Post"})})]}),children:[e.jsxs(Z,{children:[e.jsx("title",{children:"Create Post"}),e.jsx("meta",{"head-key":"description",name:"description",content:a.description??""}),e.jsx("meta",{"head-key":"robots",name:"robots",content:"max-snippet:-1, max-video-preview:-1, max-image-preview:large"})]}),e.jsx(ie,{...l,children:e.jsx("form",{onSubmit:l.handleSubmit(K),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-wrap md:flex-wrap lg:flex-nowrap",children:[e.jsxs(n,{variant:"outline",size:"icon",className:"h-7 w-7",children:[e.jsx(u,{href:route("admin.posts"),children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx(u,{className:"sr-only",href:route("admin.posts"),children:e.jsx("span",{children:"Back"})})]}),e.jsxs("div",{className:"hidden items-center gap-2 md:ml-auto md:flex",children:[a.status==="draft"?e.jsx(e.Fragment,{children:e.jsxs(n,{variant:"secondary",className:"space-x-1",size:"sm",children:[e.jsx(u,{href:route("posts.show",[a.subcategory?a.subcategory.name:a.category.name,a.slug]),children:"Preview"}),e.jsx(Q,{size:15})]})}):e.jsx(e.Fragment,{children:e.jsxs(n,{variant:"secondary",className:"space-x-1",size:"sm",children:[e.jsx(u,{href:route("posts.show",[a.subcategory?a.subcategory.name:a.category.name,a.slug]),children:"View "}),e.jsx(Q,{size:15})]})}),e.jsx(n,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(n,{size:"sm",type:"submit",children:d?e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Post"})})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[e.jsx("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:e.jsxs(j,{"x-chunk":"dashboard-07-chunk-0",children:[e.jsxs(y,{children:[e.jsx(p,{children:"Post Details"}),e.jsx(N,{children:"Enter Details related to post"})]}),e.jsx(C,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:l.control,name:"title",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Title"}),e.jsx(c,{children:e.jsx(H,{placeholder:"Title",type:"text",className:"w-full",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:l.control,name:"slug",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Slug"}),e.jsx(c,{children:e.jsx(H,{placeholder:"Slug",type:"text",className:"w-full",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:l.control,name:"description",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Description"}),e.jsx(c,{children:e.jsx(oe,{id:"description",placeholder:"Description",className:"min-h-32",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(t,{control:l.control,name:"content",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Content"}),e.jsx(c,{children:e.jsx("div",{className:"",children:e.jsx(ce,{data:a.content,onChange:r=>J(r)})})}),e.jsx(te,{children:"Write your post content here."}),e.jsx(x,{})]})})})]})})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:[e.jsxs(j,{"x-chunk":"dashboard-07-chunk-2",children:[e.jsx(y,{children:e.jsx(p,{children:"Post Category"})}),e.jsx(C,{children:e.jsx("div",{className:"grid gap-6 sm:grid-cols-3",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{control:l.control,name:"category",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Category"}),e.jsxs(S,{onValueChange:r=>{G(r)},defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(w,{children:e.jsx(F,{placeholder:"Select a Post Category"})})}),e.jsx(P,{children:b.map(r=>e.jsx(f,{value:r.name,children:r.name},r.id))})]}),e.jsx(x,{})]})}),I.length?e.jsx(t,{control:l.control,name:"subcategory",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Sub Category"}),e.jsxs(S,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(w,{children:e.jsx(F,{placeholder:"Select a Post Category"})})}),e.jsx(P,{children:I.map(r=>e.jsx(f,{value:r.name,children:r.name},r.id))})]}),e.jsx(x,{})]})}):null]})})})]}),e.jsxs(j,{"x-chunk":"dashboard-07-chunk-3",children:[e.jsx(y,{children:e.jsx(p,{children:"Post Status"})}),e.jsx(C,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(t,{control:l.control,name:"status",render:({field:s})=>e.jsxs(o,{children:[e.jsx(h,{children:"Status"}),e.jsxs(S,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(c,{children:e.jsx(w,{id:"status","aria-label":"Select status",children:e.jsx(F,{placeholder:"Select status"})})}),e.jsxs(P,{children:[e.jsx(f,{value:"draft",children:"Draft"}),e.jsx(f,{value:"published",children:"Published"}),e.jsx(f,{value:"archived",children:"Archived"})]})]})]})})})})})]}),e.jsx(j,{"x-chunk":"dashboard-07-chunk-3",children:e.jsxs("div",{className:"flex p-5 justify-between items-center",children:[e.jsxs("div",{className:"flex flex-col max-w-[380px] space-y-2",children:[e.jsx(p,{children:"Featured Post"}),e.jsx(N,{children:"Marking this post as featured will reset other posts featured."})]}),e.jsx(t,{control:l.control,name:"featured",render:({field:s})=>e.jsx(o,{children:e.jsx(c,{children:e.jsx(de,{checked:s.value,onCheckedChange:s.onChange})})})})]})}),e.jsxs(j,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-4",children:[e.jsxs(y,{children:[e.jsx(p,{children:"Post Image"}),e.jsx(N,{children:"Upload featured image for this post."})]}),e.jsx(C,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:s=>{const r=s.target.files[0];if(r){const i=new FileReader;i.onloadend=()=>{$(i.result),q.setValue("image",s.target.files[0])},i.readAsDataURL(r)}},className:"hidden",id:"file-upload"}),v?e.jsx("img",{onClick:d?void 0:s=>document.getElementById("file-upload").click(),alt:a.title??"",className:`aspect-square w-full rounded-md object-cover ${d?"cursor-not-allowed":"cursor-pointer"}`,height:"300",src:v,width:"300"}):e.jsx("img",{alt:a.title??"",className:"aspect-square w-full rounded-md object-cover",height:"300",src:"/placeholder.svg",width:"300"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(se,{children:e.jsxs(re,{children:[e.jsx(ae,{asChild:!0,children:v?e.jsxs(e.Fragment,{children:[e.jsxs(n,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",onClick:s=>document.getElementById("file-upload").click(),disabled:d,children:[e.jsx(O,{className:"h-4 w-4 mr-2"}),"Change Image"]}),e.jsx(n,{className:"mt-2",type:"button",onClick:X,disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Image"})})]}):e.jsxs(n,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",disabled:d,onClick:s=>document.getElementById("file-upload").click(),children:[e.jsx(O,{className:"h-4 w-4 mr-2"}),"Upload Image"]})}),e.jsx(le,{side:"bottom",children:v?"Click to change image":"Click to upload image"})]})})})]})})]})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[e.jsx(n,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(n,{type:"submit",size:"sm",children:"Save Post"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
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
            `})]})};export{Ue as default};
