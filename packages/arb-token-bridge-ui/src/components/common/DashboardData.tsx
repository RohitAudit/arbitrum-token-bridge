import React from 'react'
import { useState, useEffect } from 'react'
import { getClient } from '../../util/client'
import { gql } from '@apollo/client'
import Link from 'next/link'

const validatorQuery = gql`
  query Now {
    validators {
      clusterId
      id
      rollup
      status
    }
  }
`

const nodeQuery = gql`
  query Now2 {
    nodeOperators {
      id
      ip
      name
      pubkey
    }
  }
`

const clusterQuery = gql`
  query MyQuery {
    clusters {
      id
      operatorIds
    }
  }
`

interface NodeOperator {
  id: string
  ip: string
  name: string
  pubkey: string
  clusterId?: string
}
interface Cluster {
  id: string
  operatorIds: string[]
}
interface Validator {
  clusterId: string
  id: string
  rollup: string
  status: string
}

interface ClusterData {
  clusters: Cluster[]
}
interface NodeData {
  nodeOperators: NodeOperator[]
}

interface ValidatorData {
  validators: Validator[]
}

export function ValidatorsData() {
  const [data, setData] = useState<ValidatorData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getClient.query({ query: validatorQuery })
        setData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  if (!data) {
    return <div className="text-white">No data available</div>
  }
  if (data) {
    console.log('data', data.validators.length)
  }
  return (
    <div className=" overflow-x-auto  ">
      {data.validators.length ? (
        <table className="mt-4 w-full min-w-full table-fixed  border-collapse text-left   text-gray-200 ">
          <thead>
            <tr className=" bg-[#00233C]      ">
              <th className="w-16 p-2 text-center  ">S.No</th>
              <th className="w-[40%] text-center lg:w-[60%] xl:w-[80%]     ">
                Validator Public Key
              </th>
              <th className="w-[30%] text-center ">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.validators.map((validator, index) => (
              <tr key={index} className=" border-2 border-[#003F69] py-4  ">
                <td className="text-center   ">{index+1}</td>
                <td
                  className="overflow-hidden text-ellipsis whitespace-nowrap p-3 text-center   "
                  title={validator.id}
                >
                  <Link
                    href={`https://holesky.beaconcha.in/validator/${validator.id}`}
                    target="_blank"
                    className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all "
                  >
                    {validator.id}
                  </Link>
                </td>
                <td className="text-center  ">{validator.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h1 className="text-white">No Validator Data found</h1>
        </>
      )}
    </div>
  )
}

export function NodeOperatorData() {
  const [data, setData] = useState<NodeData | null>(null)
  const [loading, setLoading] = useState(true)

  if (data) {
    console.log('data', data.nodeOperators)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: nodeData }, { data: clusterData }] = await Promise.all([
          getClient.query({ query: nodeQuery }),
          getClient.query({ query: clusterQuery })
        ])

        const { nodeOperators } = nodeData
        const { clusters } = clusterData

        const operatorWithClusterId = nodeOperators.map(
          (operator: NodeOperator) => {
            const cluster = clusters.find((cluster: Cluster) =>
              cluster.operatorIds.includes(operator.id)
            )
            return { ...operator, clusterId: cluster ? cluster.id : 'N/A' }
          }
        )

        setData({ nodeOperators: operatorWithClusterId })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  if (!data) {
    return <div className="text-white">No data available</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="mt-4 w-full table-fixed text-left text-white">
        <thead>
          <tr className="bg-[#00233C]      ">
            <th className="p-2 text-center">SSV operator ID</th>
            <th className="text-center">SSV operator name</th>
            <th className="text-center">SSV cluster ID</th>
          </tr>
        </thead>
        <tbody>
          {data && data.nodeOperators.length > 0 ? (
            data.nodeOperators.map((operator, index) => (
              <tr key={index} className=" border-2 border-[#003F69] py-4  ">
                <td className="p-3 text-center">
                  <Link
                    href={`https://holesky.explorer.ssv.network/operators/${operator.id}`}
                    target="_blank"
                    className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all"
                  >
                    {operator.id}
                  </Link>
                </td>
                <td className="text-center">{operator.name}</td>
                <td className="text-center">{operator.clusterId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center">
                No operators found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
