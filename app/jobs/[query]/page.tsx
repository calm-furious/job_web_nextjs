'use client'

import { useState, useEffect } from "react"
import { Briefcase } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would typically come from a database or API
const jobListings = [
    { id: 1, title: "Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time" },
    { id: 2, title: "UX Designer", department: "Design", location: "Zug", type: "Full-time" },
    { id: 3, title: "Data Analyst", department: "Data Science", location: "Hongkong", type: "Intern" },
    { id: 4, title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Part-time" },
    { id: 5, title: "Product Manager", department: "Product", location: "Hongkong", type: "Full-time" },
]



export default function JobOpenings() {
    const [searchTerm, setSearchTerm] = useState("")
    const [department, setDepartment] = useState("all")
    const [location, setLocation] = useState("all")
    const [jobType, setJobType] = useState("all")
    const [filteredJobs, setFilteredJobs] = useState(jobListings)
    let department_list = jobListings.reduce((acc, job) => {
        if (!acc.includes(job.department)) {
            acc.push(job.department)
        }
        return acc
    }, new Array<string>("all"));

    useEffect(() => {
        const filtered = jobListings.filter((job) => {
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesDepartment = department === "all" || job.department.toLowerCase() === department.toLowerCase()
            const matchesLocation = location === "all" || job.location.toLowerCase() === location.toLowerCase()
            const matchesJobType = jobType === "all" || job.type.toLowerCase() === jobType.toLowerCase()

            return matchesSearch && matchesDepartment && matchesLocation && matchesJobType
        })

        setFilteredJobs(filtered)

    }, [searchTerm, department, location, jobType])

    return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Acme Corp Job Openings</h1>

          <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6 mb-8">
              <Input
                placeholder="Search jobs..."
                className="md:col-span-2 lg:col-span-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger>
                      <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                      {department_list.map((item)=> (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                  </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                      <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="new york">New York</SelectItem>
                      <SelectItem value="san francisco">San Francisco</SelectItem>
                      <SelectItem value="london">London</SelectItem>
                  </SelectContent>
              </Select>
              <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                      <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
              </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <Card key={job.id}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5" />
                            {job.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-2">Department: {job.department}</p>
                        <p className="text-sm text-muted-foreground mb-2">Location: {job.location}</p>
                        <p className="text-sm text-muted-foreground">Type: {job.type}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            {/*<Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>*/}
                            <Link href={`/apply`}>Apply Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
              ))}
          </div>
      </div>
    )
}