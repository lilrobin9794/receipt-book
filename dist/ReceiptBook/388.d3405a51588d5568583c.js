(self.webpackChunkreceipt_book=self.webpackChunkreceipt_book||[]).push([[388],{388:(e,i,t)=>{"use strict";t.r(i),t.d(i,{RecipeModule:()=>f});var r=t(665),n=t(466),c=t(855),o=t(639),s=t(711),p=t(457),u=t(583);function d(e,i){if(1&e&&(o.TgZ(0,"li",8),o._uU(1),o.qZA()),2&e){const e=i.$implicit;o.xp6(1),o.AsE("",e.name," (",e.amount,")")}}let l=(()=>{class e{constructor(e,i,t,r){this.recipeService=e,this.shoppingListService=i,this.activatedRoute=t,this.router=r}ngOnInit(){this.subscription=this.activatedRoute.params.subscribe(e=>{this.recipeId=e.id,this.selectedRecipe=this.recipeService.getRecipe(this.recipeId)})}ngOnDestroy(){this.subscription.unsubscribe()}onAddToList(){this.shoppingListService.addIngredients(this.selectedRecipe.ingredients)}onEdit(){this.router.navigate(["/recipes",this.recipeId,"edit"])}onDelete(){this.router.navigate(["/recipes"]),this.recipeService.deleteRecipe(this.recipeId)}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.j),o.Y36(p._),o.Y36(c.gz),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe-detail"]],decls:24,vars:4,consts:[[1,"row"],[1,"col-xs-12"],["alt","",1,"img-responsive",3,"src"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.qZA(),o.TgZ(3,"div",0),o.TgZ(4,"div",1),o.TgZ(5,"h1"),o._uU(6),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"div",0),o.TgZ(8,"div",1),o.TgZ(9,"button",3),o.NdJ("click",function(){return i.onAddToList()}),o._uU(10,"Zur Einkaufsliste"),o.qZA(),o.TgZ(11,"button",4),o.NdJ("click",function(){return i.onEdit()}),o._uU(12,"Bearbeiten"),o.qZA(),o.TgZ(13,"button",5),o.NdJ("click",function(){return i.onDelete()}),o._uU(14,"L\xf6schen"),o.qZA(),o.qZA(),o.qZA(),o._UZ(15,"hr"),o.TgZ(16,"div",0),o.TgZ(17,"div",1),o.TgZ(18,"p"),o._uU(19),o.qZA(),o.qZA(),o.qZA(),o.TgZ(20,"div",0),o.TgZ(21,"div",1),o.TgZ(22,"ul",6),o.YNc(23,d,2,2,"li",7),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("src",null==i.selectedRecipe?null:i.selectedRecipe.imagePath,o.LSH),o.xp6(4),o.Oqu(null==i.selectedRecipe?null:i.selectedRecipe.name),o.xp6(13),o.Oqu(null==i.selectedRecipe?null:i.selectedRecipe.description),o.xp6(4),o.Q6J("ngForOf",null==i.selectedRecipe?null:i.selectedRecipe.ingredients))},directives:[u.sg],encapsulation:2}),e})();function a(e,i){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",24),o.TgZ(2,"div",25),o._UZ(3,"input",26),o.qZA(),o.TgZ(4,"div",25),o._UZ(5,"input",27),o.qZA(),o.TgZ(6,"div",28),o.TgZ(7,"button",4),o.NdJ("click",function(){const i=o.CHM(e).index;return o.oxw().onRemoveIngredient(i)}),o._uU(8,"X"),o.qZA(),o.qZA(),o.qZA(),o._UZ(9,"br"),o._UZ(10,"br"),o.qZA()}if(2&e){const e=i.index;o.xp6(1),o.s9C("formGroupName",e)}}let Z=(()=>{class e{constructor(e,i,t,r){this.recipeService=e,this.formBuilder=i,this.router=t,this.activatedRoute=r,this.isNew=!0}ngOnInit(){var e,i,t;this.subscription=this.activatedRoute.params.subscribe(e=>{e.hasOwnProperty("id")?(this.isNew=!1,this.recipeIndex=+e.id,this.recipe=this.recipeService.getRecipe(this.recipeIndex)):(this.isNew=!0,this.recipe=null)});let n=new r.Oe([]);if(!this.isNew&&this.recipe.hasOwnProperty("ingredients"))for(let c of this.recipe.ingredients)n.push(new r.cw({name:this.formBuilder.control(c.name,r.kI.required),amount:this.formBuilder.control(c.amount,r.kI.required)}));this.recipeForm=this.formBuilder.group({name:[null===(e=this.recipe)||void 0===e?void 0:e.name,r.kI.required],imagePath:[null===(i=this.recipe)||void 0===i?void 0:i.imagePath,r.kI.required],description:[null===(t=this.recipe)||void 0===t?void 0:t.description,r.kI.required],ingredients:n})}ngOnDestroy(){this.subscription.unsubscribe()}get ingredientsFormGroup(){return this.recipeForm.get("ingredients")}onSubmit(){const e=this.recipeForm.value;this.isNew?this.recipeService.addRecipe(e):this.recipeService.editRecipe(this.recipe,e),this.navigateBack()}onCancel(){this.navigateBack()}navigateBack(){this.router.navigate(["/"])}onAddIngredient(e,i){this.ingredientsFormGroup.push(this.formBuilder.group({name:[e,r.kI.required],amount:[i,r.kI.required]}))}onRemoveIngredient(e){this.ingredientsFormGroup.removeAt(e)}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.j),o.Y36(r.qu),o.Y36(c.F0),o.Y36(c.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe-edit"]],decls:49,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],[1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","image-url"],["type","text","id","image-url","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img"],[3,"src"],["for","content"],["type","text","id","content","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"list-group"],["class","row",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-md-5"],["type","text",1,"form-control"],["itemName",""],["itemAmount",""],[1,"col-md-2"],["type","button",1,"btn","btn-primary",3,"click"],[3,"formGroupName"],[1,"col-sm-5"],["type","text","formControlName","name",1,"form-control"],["type","text","formControlName","amount",1,"form-control"],[1,"col-sm-2"]],template:function(e,i){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return i.onSubmit()}),o.TgZ(3,"div",0),o.TgZ(4,"div",1),o.TgZ(5,"button",3),o._uU(6,"Speichern"),o.qZA(),o.TgZ(7,"a",4),o.NdJ("click",function(){return i.onCancel()}),o._uU(8,"Abbrechen"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",0),o.TgZ(10,"div",1),o.TgZ(11,"div",5),o.TgZ(12,"label",6),o._uU(13,"Title"),o.qZA(),o._UZ(14,"input",7),o.qZA(),o.qZA(),o.qZA(),o.TgZ(15,"div",0),o.TgZ(16,"div",1),o.TgZ(17,"div",5),o.TgZ(18,"label",8),o._uU(19,"Image Url"),o.qZA(),o._UZ(20,"input",9,10),o.qZA(),o.qZA(),o.qZA(),o.TgZ(22,"div",0),o.TgZ(23,"div",1),o.TgZ(24,"div",11),o._UZ(25,"img",12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"div",0),o.TgZ(27,"div",1),o.TgZ(28,"div",5),o.TgZ(29,"label",13),o._uU(30,"Content"),o.qZA(),o._UZ(31,"textarea",14),o.qZA(),o.qZA(),o.qZA(),o.TgZ(32,"div",0),o.TgZ(33,"div",1),o.TgZ(34,"ul",15),o.YNc(35,a,11,1,"div",16),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(36,"hr"),o.TgZ(37,"div",0),o.TgZ(38,"div",1),o.TgZ(39,"div",17),o.TgZ(40,"div",18),o._UZ(41,"input",19,20),o.qZA(),o.TgZ(43,"div",18),o._UZ(44,"input",19,21),o.qZA(),o.TgZ(46,"div",22),o.TgZ(47,"button",23),o.NdJ("click",function(){o.CHM(e);const t=o.MAs(42),r=o.MAs(45);return i.onAddIngredient(t.value,r.value)}),o._uU(48,"+ "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&e){const e=o.MAs(21);o.xp6(2),o.Q6J("formGroup",i.recipeForm),o.xp6(3),o.Q6J("disabled",!i.recipeForm.valid),o.xp6(20),o.Q6J("src",e.value,o.LSH),o.xp6(10),o.Q6J("ngForOf",i.ingredientsFormGroup.controls)}},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.CE,u.sg,r.x0],encapsulation:2}),e})(),g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,i){1&e&&(o.TgZ(0,"h1"),o._uU(1,"Bitte Rezept ausw\xe4hlen"),o.qZA())},encapsulation:2}),e})();const m=function(e){return[e]};let v=(()=>{class e{constructor(e){this.recipeService=e}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.j))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",recipeId:"recipeId"},decls:8,vars:6,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],["alt","",1,"img-responsive",2,"max-height","50px",3,"src"]],template:function(e,i){1&e&&(o.TgZ(0,"a",0),o.TgZ(1,"div",1),o.TgZ(2,"h4",2),o._uU(3),o.qZA(),o.TgZ(4,"p",3),o._uU(5),o.qZA(),o.qZA(),o.TgZ(6,"div",4),o._UZ(7,"img",5),o.qZA(),o.qZA()),2&e&&(o.Q6J("routerLink",o.VKq(4,m,i.recipeId)),o.xp6(3),o.Oqu(i.recipe.name),o.xp6(2),o.Oqu(i.recipe.description),o.xp6(2),o.Q6J("src",i.recipe.imagePath,o.LSH))},directives:[c.yS,c.Od],encapsulation:2}),e})();function h(e,i){if(1&e&&o._UZ(0,"app-recipe-item",5),2&e){const e=i.index;o.Q6J("recipe",i.$implicit)("recipeId",e)}}let A=(()=>{class e{constructor(e,i){this.recipeService=e,this.router=i}ngOnInit(){this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["recipes","new"])}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(s.j),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe-list"]],decls:9,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[1,"list-group"],[3,"recipe","recipeId",4,"ngFor","ngForOf"],[3,"recipe","recipeId"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"a",2),o.NdJ("click",function(){return i.onNewRecipe()}),o._uU(3,"Neues Rezept"),o.qZA(),o._UZ(4,"hr"),o.qZA(),o.qZA(),o.TgZ(5,"div",0),o.TgZ(6,"div",1),o.TgZ(7,"ul",3),o.YNc(8,h,1,2,"app-recipe-item",4),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Q6J("ngForOf",i.recipes))},directives:[u.sg,v],encapsulation:2}),e})();const q=c.Bz.forChild([{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-recipe"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o._UZ(2,"app-recipe-list"),o.qZA(),o.TgZ(3,"div",2),o._UZ(4,"router-outlet"),o.qZA(),o.qZA())},directives:[A,c.lC],encapsulation:2}),e})(),children:[{path:"",component:g},{path:"new",component:Z},{path:":id",component:l},{path:":id/edit",component:Z}]}]);let f=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.UX,q,n.m]]}),e})()}}]);