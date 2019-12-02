<template>
    <v-container>
        <v-card>
            <v-form v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field
                        type="email"
                        label="이메일"
                        :rules="emailRulse"
                        required
                    />
                    <v-text-field
                        type="password"
                        label="비밀번호"
                        :rules="passwordRulse"
                        required
                    />
                    <v-btn color="dark" type="submit" :disabled="!valid">로그인</v-btn>
                    <v-btn nuxt to="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRulse: [
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
            ],
            passwordRulse: [
                v => !!v || '비밀번호는 필수입니다.',
            ],
        }
    },
    methods: {
        onSubmitForm() {
            this.$refs.form.validate();
        }
    },
}
</script>

<style scoped>

</style>