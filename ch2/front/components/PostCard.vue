<template>
    <v-card style="margin-bottom: 20px">
        <v-image />
        <v-card-text>
            <div>
                <h3>닉네임</h3>
                <div>내용</div>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="dark">
                <v-icon>mdi-twitter-retweet</v-icon>
            </v-btn>
            <v-btn color="dark">
                <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn color="dark">
                <v-icon>mdi-comment-outline</v-icon>
            </v-btn>
            <v-btn color="dark">
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            name: 'Nuxt.js',
        }
    },
}
</script>

<style scoped>

</style>