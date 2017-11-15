<!-- .slide: data-state="title" -->
# Modular Apps with Vue.js

> > Author Notes: I wanted to start by showing you the basics of the Vue.js framework and show you how to put together a small application. Most of this content comes from my course called Building an Interface with Vue.js on Lynda.com and LinkedIn Learning.

I'm not assuming that you know a ton about the framework, but you should know enough Javascript to understand what is going on here.

I'm going to be covering some of the basic concepts of the framework and then show you the types of things you'll need to do to build an application. I won't be going over the whole application.

Free Lynda.com course until this weekend.

---

## What is Vue.js

- Easy JS framework
- Progressive
- Component Based
- Virtual DOM

> > Author Notes:

- Vue.js is really easy to learn, much more so than frameworks like Angular and React. I know because I did those courses. I sort of think of it as what the third version of AngularJS should have been and what the next version of React should be more like.

- One of the claims to fame of Vue, is that it a progressive frameworks for building user interfaces. This just means that you can use as little or as much of it as you want. It's not designed to be the single thing in which you build your entire App, although you can do that.

- Component based. Most modern frameworks like the newer Angular and React have this type of structure called components, which are little pieces of code that together make up a single application

- The main advantage that something like React and Vue.js have over other frameworks is something called the Virtual DOM. Which essentially means that you can create an app and never worry about having to update the DOM. The traditional way of building apps involves messing around with data and then at some point updating the DOM to reflect what happened in your data. With Vue, you only worry about modifying the data, you never have to worry about the DOM.

---
<!-- .slide: data-state="title" -->

# Vue.js Interface
Creating a Simple App
<small>
[01_01e](https://github.com/planetoftheweb/vueinterface/blob/01_01e/app/index.html)
</small>
---

## The Basics

- `https://unpkg.com/vue`
- `Vue` object
- Pass configuration {}

> > Author Notes:

1. With any other simple framework, you start by loading up the library. You can download this file, but vue.js provides a copy of the code at this URL. All you have to do is use a script tag to include this into your page.

1. Once you do that, you'll have access to the Vue constructor, which gives you access to all of the features of the framework.

1. You'll need to use this view constructor to create an instance and you pass along a configuration object. In this object, you define different properties and methods for the application.

---

## Configuring Vue.js

```
var vm = new Vue({
  el: '#app',
  data: {
    title: 'Appointments'
  }
});
```
<!-- .element: class="fragment" contenteditable="true" style="width: 50%;" -->

- Many properties
- `el` &ndash; DOM target
- `data` &ndash; reactive proxies

> > Author Notes:
Here's what the script for a basic app looks like, you can see that we use the new keyword to store our app into a vm variable. That could be named anything you want, but it's customary to call it vm for view-model, which is what VUe.js focuses on the view, which is the display of information and the model, which is the data.

1. there's a lot of properties that you can use from the Vue object including items for data, a template, methods, watched variables, lifecycle callbacks and much more.

1. A common element is called el, which stands for elements. Applications replace an element on your HTML and this property identifies what that element is. It looks like CSS, so in this case we're looking for an HTML element with an ID of app.

1. The next element is the data property, this element creates copies or proxies of variables that you can use in templates. Changes to these variables are what's called reactive, which means that if the information in those variables changes, Vue will check to see if the DOM needs to be updated because of these changes for you. That's one of the cool things about this framework.

---

## Using Templates

```
<div id="app">
  <h1>{{title}}</h1>
</div>
```
<!-- .element: class="fragment" contenteditable="true" style="width: 50%;" -->

- Target element `id`
- `{{title}}` &ndash; variables
- Rich templating

> > Author Notes:
1. In terms of the template, you'll need to create the element that will hold the application. in our case, we're targeted and id in the previous example, so you need to create that in HTML

1. You can then use the data proxies...the variables you created and send them to your app.

1. Vue has a rich templating language, so in addition to just displaying the variables in our data, there's lots of things like events, if-then-else conditionals, loops and much more.


---

<!-- .slide: data-state="title" -->
# Vue.js Interface
Creating a Modular App
[01_02e](https://github.com/planetoftheweb/vueinterface/tree/01_02e)

> > Author Notes:
When you create larger apps, it's a good idea to break the functionality into pieces called modules. It makes the application easier to create and maintain. It's a little harder, but in the long run you'll be better off learning to program with components. If you want to create Vue projects without components, make sure you take a peek at this course.

---

## Working with Modules

- Require build tools
- Startup-code
- Import modules

> > Author Notes:

1. Because JavaScript current versions of JavaScript aren't designed to be modular, we have to use tools that allow us to work in this manner. By far the most popular tool to use for this today is called webpack.

1. You also need some code to start up the application, this is sometimes called bootstrapping the application. The code for that is similar to the code we've already used.

1. Working with modules means working with different files, so you'll need to use import statements to pull them from one file to another.

---
## Bootstrap Code

```
import Vue from 'vue';
import App from './App.vue';

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})
```
<!-- .element: class="fragment" contenteditable="true" style="width: 50%;" -->

- No data
- `render` property

> > Author Notes:
Here's what the code for the bootstrap application looks like, you can see the import statements as well as our Vue constructor.

1. Something to note here is that the booststrap code doesn't have any data. It doesn't need it because it's all inside your components.

1. The render property gets passed a function that loads the Application that you imported with the import statement above. The format of this import statements is commonjs, so if you look online for samples you might see a slightly different format that does the same thing called AMD.

```
render: (function (h) {
  return h(App);
});
```

---
## Our Module

```
<template><div></div></template>

<script>
export default {
  name: 'MainApp',
  data() { return { title: 'Appointment' } }
} //default
</script>
```
<!-- .element: class="fragment" contenteditable="true" style="width: 70%;" -->

- `<template>` with single element
- Export `<script>`
- `data()` with return

> > Author Notes:
1. When you use a module, you create a template tag and place your HTML in there. Inside that template, there has to be a single container tag and your template will go inside that main container. You'll get an error if you try to use more than one.

1. Because this is a module, it needs to export information that gets imported into the startup code. The export statement goes in a script with an object that looks a bit different than in our previous template. We don't need to specify an element to target because we already know that the template code is what is going to be used. There's also usually a name property to identify the module. That will make it easy to identify the modules when you use the Vue.js debugger.

1. Data is a method and you'll normally see it written like this. This is ES6 javascript, but it's just like a normal method. Inside, you have the variables that are available in our template.

```
data: function data() {
  return {
    title: 'Appointment'
  };
}
```

---

<!-- .slide: data-state="title" -->
# Vue.js Interface
Component Styles
[01_02e-01_03e](https://github.com/planetoftheweb/vueinterface/compare/01_02e...01_03e)

> > Author Notes:
One of the advantages to having components is that you can isolate everything that belongs to the component in a single place...and that include styles. Vue.js gives you a couple of tools that can help you build components with styles.

---

## Styles

- `<style>` tags
- More efficient styles
- `scoped` attribute
> > Author Notes:


1. Components can have their own styles using the style tag. You can store styles related to the current component here

1. That's a lot better than just including them in a big page stylesheet because they will be loaded ONLY when a component exists. That makes your applications faster, more efficient and easier to update. You don't have to dig through a huge stylesheet, it's stored directly in with the template.

1. You can add a `scoped` attribute to your style definition and then the styles will work only for the code in the template, which will also make it easier to build your styles.

---

<!-- .slide: data-state="title" -->
# Vue.js Interface
Application Lifecycle
<small>[01_03-01_04](https://github.com/planetoftheweb/vueinterface/compare/01_03e...01_04e)</small>

> > Author Notes: In Vue.js like in many other frameworks and application goes through a series of steps as it is created. These are called lifecycles and Vue allows you perform different actions throughout this lifecycle.

---
## Instance Lifecycle Hooks

<p class="fragment" style="width: 80%; line-height: 100%;">

<code class="code-info">beforeCreate</code>
<code class="code-info">created</code>
<code class="code-info">mounted</code>
<code class="code-info">beforeUpdate</code>
<code class="code-info">updated</code>
<code class="code-info">beforeDestroy</code>
<code class="code-info">destroyed</code></p>

<p class="fragment">Perfect for `AJAX` requests/http `verbs`</p>


> > Author Notes:

1. Here's a list of the Lifecycle hooks you can use to do things in your application

1. These are perfect for performing AJAX operations and other http requests so we can load content at a certain point so that it become available to our application. In our case, we're going to want to use the `created` method.

---

<iframe style="width:-webkit-fill-available !important; height:-webkit-fill-available !important" src="https://vuejs.org/images/lifecycle.png">

> > Author Notes:
Let's take a look at the different methods visually. You can find this graphic and more information about the different lifecycle methods at [this URL](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks (overlay)

This way we can ask a server for our data after the application has been initialized, but before we start dealing with the replacement of the html element that our application is going to take over.

---

# Vue.js Interface
Named Components
<small>[01_04-02_01](https://github.com/planetoftheweb/vueinterface/compare/01_04e...02_01e)</small>


> > Author Notes: Applications generally have more than one piece of functionality, so it's rare to just have a single main component. We can break down our functionality into sub-components and give each a separate unique name.

---
## App Structure

```xml
<main>
  <add-appointment>
  <search-appointments>
  <appointment-list>
</main>
```
<!-- .element: class="fragment" contenteditable="true" style="width: 40%;" -->

- `props` attribute
- `import` and `register`

> > Author Notes:

Our application is going to have three main components, one for listing our appointments, one for adding appointments and another for searching through the appointments.

Our main App.vue file is going to hold all three so it's always a good idea to break the functionality into separate components and inside our component. When we do that, we can give each component an individual name.

Each sub-component will need to communicate with the main component to receive some information, we do that through something called props. They look just like HTML attributes. Their job is to pass along data from the main component down to the sub-components.

# App Structure

We'll need to create a file called AppointmentList.vue to hold our appointment list and move our list code as well as our styles there.

In our main application, we can replace our `<ul>` with a new `<appointment-list />` tag.

Now that our component will be in a separate file, we'll need to import it into this file.

`import AppointmentList from './AppointmentList.vue';`


In order for the application to know what to do with our new tag, we'll need to register this tag as a component that points to the content in our external file.

```
components: {
  'appointment-list': AppointmentList
},
```

We'll also need to make sure we pass along the data from this file to the sub-component. We can do that with something called a prop.

```
    <appointment-list
      :appointments="theAppointments"
    />
```

This appointments variable will exist in our sub-component and needs to be tied to the variable in this component with our data, which is called theAppointments.


---
<!-- .slide: data-state="title" -->

# Vue.js Interface
[The Final App](https://github.com/planetoftheweb/vueinterface)
