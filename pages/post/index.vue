<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(user, id) in userList" :key="id">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">{{user.Email}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userServices from '@/services/modules/userServices'
export default {
  data () {
    return {
      userList: []
    }
  },
  async fetch () {
    await this.getAllUser()
  },
  methods: {
    async getAllUser () {
      try {
        const users = await userServices.getAll()
        if (users) {
          console.log('users :>> ', users.data)
          this.userList = users.data.Data
        }
      } catch (error) {
        console.log('error :>> ', error)
      }
    }
  }
}
</script>

<style>

</style>
