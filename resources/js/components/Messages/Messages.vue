<template>
    <div>
        <h3 class="text-center">Contatos</h3>
        <br />

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Mensagem</th>
                    <th>Anexo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="message in messages" :key="message.id">
                    <td>{{ message.id }}</td>
                    <td>{{ message.name }}</td>
                    <td>{{ message.email }}</td>
                    <td>{{ message.phone }}</td>
                    <td>{{ message.message }}</td>
                    <td>{{ message.attachment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
        };
    },
    created() {
        this.axios
            .get("http://localhost:8000/api/messages")
            .then((response) => {
                this.messages = response.data;
            });
    },
    methods: {
        deleteBook(id) {
            this.axios
                .delete(`http://localhost:8000/api/message/delete/${id}`)
                .then((response) => {
                    let i = this.messages.map((item) => item.id).indexOf(id);
                    this.messages.splice(i, 1);
                });
        },
    },
};
</script>
