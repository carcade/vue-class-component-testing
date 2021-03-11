<template>
    <div>
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Место работы
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Начало
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Конец
                </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="job in jobs">
                <td class="px-6 py-4">
                    {{ job.name }}
                </td>
                <td class="px-6 py-4">
                    {{ job.startDate }}
                </td>
                <td class="px-6 py-4">
                    {{ job.endDate }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ObjectJobCard',
    props: {
        jobs: Array,
    }
}
</script>
