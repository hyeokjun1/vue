<template>
    <div style="margin-bottom: 20px">
        <v-card>
            <v-image name="" />
            <v-card-title>
                <h3>
                    <nuxt-link :to="'/user/' + post.id">{{post.User.nickname}}</nuxt-link>
                </h3>
            </v-card-title>
            <v-card-text>
                <div>
                    {{post.content}}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="dark">
                    <v-icon>mdi-twitter-retweet</v-icon>
                </v-btn>
                <v-btn color="dark">
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn color="dark" @click="onToggleComment">
                    <v-icon>mdi-comment-outline</v-icon>
                </v-btn>
                <v-menu offset-y open-on-hover>
                    <template v-slot:activator="{ on }">
                        <v-btn color="dark" v-on="on">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <div style="background: white">
                        <v-btn dark color="dark" @click="onRemovePost">삭제</v-btn>
                        <v-btn dark color="dark" @click="onEditPost">수정</v-btn>
                    </div>
                </v-menu>

            </v-card-actions>
        </v-card>
        <template v-if="commentOpened">
            <comment-form :post-id="post.id"></comment-form>
            <v-list>
                <v-list-item v-for="c in post.Comments" :key="c.id">
                    <v-list-item-avatar color="primary">
                        <span>{{ c.User.nickname[0] }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ c.User.nickname }}</v-list-item-title>
                        <v-list-item-subtitle>{{ c.content }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>
    </div>
</template>

<script>
import CommentForm from '~/components/CommentForm'

export default {
    components: {
        CommentForm
    },
    data() {
        return {
            commentOpened: false
        }
    },
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    methods: {
        onRemovePost() {
            this.$store.dispatch('posts/remove', {
                id: this.post.id,
            })
        },
        onEditPost() {

        },
        onToggleComment() {
            this.commentOpened = !this.commentOpened
        }
    },
}
</script>

<style scoped>
a {
    color: rgb(78, 72, 72) !important;
    text-decoration: none;
}
</style>