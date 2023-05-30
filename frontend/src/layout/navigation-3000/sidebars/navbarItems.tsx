import {
    IconApps,
    IconBarChart,
    IconCohort,
    IconComment,
    IconCottage,
    IconExperiment,
    IconFlag,
    IconGauge,
    IconLive,
    IconPerson,
    IconRecording,
    IconUnverifiedEvent,
} from 'lib/lemon-ui/icons'
import { Scene } from 'scenes/sceneTypes'
import { urls } from 'scenes/urls'
import { NavbarItem } from '../types'
import { dashboardsSidebarLogic } from './dashboardsSidebarLogic'
import { featureFlagsSidebarLogic } from './featureFlagsSidebarLogic'

/** A list of navbar sections with items. */
export const NAVBAR_ITEMS: NavbarItem[][] = [
    [
        {
            identifier: Scene.ProjectHomepage,
            label: 'Project homepage',
            icon: <IconCottage />,
            pointer: urls.projectHomepage(),
        },
    ],
    [
        {
            identifier: Scene.Dashboards,
            label: 'Dashboards',
            icon: <IconGauge />,
            pointer: dashboardsSidebarLogic,
        },
        {
            identifier: Scene.DataManagement,
            label: 'Data management',
            icon: <IconUnverifiedEvent />,
        },
        {
            identifier: Scene.Persons,
            label: 'Persons and groups',
            icon: <IconPerson />,
        },
        {
            identifier: Scene.Cohorts,
            label: 'Cohorts',
            icon: <IconCohort />,
        },
        {
            identifier: Scene.Annotations,
            label: 'Annotations',
            icon: <IconComment />,
        },
    ],
    [
        {
            identifier: Scene.Events,
            label: 'Events',
            icon: <IconLive />,
        },
        {
            identifier: Scene.SavedInsights,
            label: 'Product Analytics',
            icon: <IconBarChart />,
        },
        {
            identifier: Scene.Replay,
            label: 'Session Replay',
            icon: <IconRecording />,
        },
        {
            identifier: Scene.FeatureFlags,
            label: 'Feature Flags',
            icon: <IconFlag />,
            pointer: featureFlagsSidebarLogic,
        },
        {
            identifier: Scene.Experiments,
            label: 'A/B Testing',
            icon: <IconExperiment />,
        },
    ],
    [
        {
            identifier: Scene.Events,
            label: 'Events',
            icon: <IconLive />,
        },
        {
            identifier: Scene.DataManagement,
            label: 'Data management',
            icon: <IconUnverifiedEvent />,
        },
        {
            identifier: Scene.Persons,
            label: 'Persons',
            icon: <IconPerson />,
        },
        {
            identifier: Scene.Cohorts,
            label: 'Cohorts',
            icon: <IconCohort />,
        },
        {
            identifier: Scene.Annotations,
            label: 'Annotations',
            icon: <IconComment />,
        },
        {
            identifier: Scene.Plugins,
            label: 'Apps',
            icon: <IconApps />,
        },
    ],
]

export const NAVBAR_ITEM_ID_TO_ITEM: Record<string, NavbarItem> = Object.fromEntries(
    NAVBAR_ITEMS.flat().map((item) => [item.identifier, item])
)
