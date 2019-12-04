<template>
    <div>
        <v-container grid-list-xs>
            <v-card>
                <v-container grid-list-xs>
                    <v-subheader>회원가입</v-subheader>
                    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                        <v-text-field
                            v-model="email"
                            name="이메일"
                            label="email"
                            required
                            :rules="emailRulse"
                        />
                        <v-text-field
                            v-model="password"
                            name="비밀번호"
                            label="password"
                            required
                            :rules="passwordRulse"
                        />
                        <v-text-field
                            v-model="passwordCheck"
                            name="비밀번호확인"
                            label="password"
                            required
                            :rules="passwordCheckRulse"
                        />
                        <v-text-field
                            v-model="nickname"
                            name="닉네임"
                            label="nickname"
                            required
                            :rules="nicknameRulse"
                        />
                        <v-checkbox 
                            v-model="turms" 
                            label="동의하십셔" 
                            value="value" 
                            required
                            :rules="[v => !!v || '약관에 동의해야 합니다.']"
                        />
                        <v-btn color="dark" type="submit">가입하기</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            passwordCheck: '',
            nickname: '',
            turms: false,
            emailRulse: [
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
            ],
            passwordRulse: [
                v => !!v || '비밀번호는 필수입니다.',
            ],
            passwordCheckRulse: [
                v => !!v || '비밀번호 확인은 필수입니다.',
                v => v === this.password || '비밀번호가 틀렸습니다.',
            ],
            nicknameRulse: [
                v => !!v || '닉네임은 필수입니다.',
            ],
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me
        }
    },
    watch: {
        me(value) {
            if (value) {
                this.$router.push({
                    path: '/'
                })
            }
        }
    },
    methods: {
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('users/logIn', { // actions는 dispatch('모듈명,액션명') // dispatch는 promiss
                    email: this.email,
                    nickname: 'hj',
                }).then(() =>{  // 위 먼저 실행 후 페이지 이동
                    this.$router.push({ 
                        path: '/',
                    })
                }).catch(() => { // 실패시
                    alert('회원가입 실패')
                })
            }
        },
    },
    head() {
        return {
            title: '회원가입'
        }
    },
    middleware: 'anonymous'
}
</script>

<style scoped>

</style>