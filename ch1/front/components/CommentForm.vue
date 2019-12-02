<template>
    <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
        <v-textarea
            v-model="content"
            filled
            label="댓글 달기"
            :hide-details="hideDetails"
            :success-messages="successMessages"
            :success="success"
            :rules="[v => !!v.trim() || '내용을 입력해 주세요']"
            @input="onChangeTextarea"
        />
        <v-btn type="submit" color="dark" dark absolute top right>삐약</v-btn>
    </v-form>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            valid: false,
            content: '',
            success: false,
            successMessages: '',
            hideDetails: true,
        }
    },
    props: {
        postId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState('users', ['me'])
    },
    methods: {
        onChangeTextarea(value) {
            if (value.length) {
                this.hideDetails = true;
                this.success = false;
                this.successMessages = '';
            }
        },
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('posts/addComment', {
                    id: Date.now(),
                    postId: this.postId,
                    content: this.content,
                    User: {
                        nickname: this.me.nickname
                    }
                }).then(() => {
                    this.content = ''
                    this.success = true
                    this.successMessages = '댓글 등록 성공!'
                    this.hideDetails = false
                }).catch(() => {

                })
            }
        },
    },
}
</script>

<style scoped>

</style>