<template>
    <div>
        <v-container>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form v-model="valid" @submit.prevent="onCahngeNickname">
                        <v-text-field label="내 닉네임" required="required" v-model="nickname" :rules="nicknameRules" />
                        <v-btn color="dark" type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs="grid-list-xs">
                    <v-subheader>팔로잉</v-subheader>
                    <follow-list :users="followingList" :remove="removeFollowing" />
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs="grid-list-xs">
                    <v-subheader>팔로워</v-subheader>
                    <follow-list :users="followerList" :remove="removeFollower" />
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import FollowList from '~/components/FollowList'
    export default {
        components: {
            FollowList
        },
        data() {
            return {
                valid: false,
                nickname: '',
                nicknameRules: [
                    v => !!v || '닉네임을 입력하세요'
                ]
            }
        },
        computed: {
            followerList() {
                return this.$store.state.users.followerList;
            },
            followingList() {
                return this.$store.state.users.followingList;
            },
        },
        methods: {
            onCahngeNickname() {
                this.$store.dispatch('users/changeNickname', {
                    nickname: this.nickname,
                })
            },
            removeFollowing(id) {
                this.$store.dispatch('users/removeFollowing', {
                    id, // 키와 값이 같으면 축약 가능
                })
            },
            removeFollower(id) {
                this.$store.dispatch('users/removeFollower', {
                    id
                })
            }
        },
        head() {
            return {title: '프로필'}
        }
    }
</script>

<style scoped="scoped"></style>