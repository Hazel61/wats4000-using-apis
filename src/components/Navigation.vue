<template>
    <div> 
        <nav>   
           <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">
              <li>{{routes.text}}</li>
               </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
          links: [ {
            id: 0,
            text: 'Rhymesaurus',
            page:'/'
            },
            {
            id: 1,
            text: 'Adjective for Noun',
            page:'/AdjForNoun'
            },       
          ]
        }
    },

}
</script>



