<template>
    <v-app>
        <nav>
            <v-toolbar dark>
                <v-toolbar-title>
                    <nuxt-link to="/" style="text-decoration: none; color: inherit">NodeBird</nuxt-link>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                    <!-- 인풋 태그 -->
                    <v-text-field 
                        hide-details 
                        prepend-icon="mdi-magnify" 
                        label="검색" 
                        :style="{ display: 'flex', alignItems: 'center' }" 
                    />
                    <v-btn text nuxt to="/profile" color="white" :style="{ display: 'flex', alignItems: 'center' }">프로필</v-btn>
                    <v-btn text nuxt to="/signup" color="white" :style="{ display: 'flex', alignItems: 'center' }">회원가입</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <v-row no-gutters>
            <v-col cols="12" xs="12" md="4">
                <login-form />
            </v-col>
            <v-col cols="12" xs="12" md="8">
                <nuxt />
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
    components: {
        LoginForm,
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>

</style>