<?php

namespace ContainerLkXCK61;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getMaker_DoctrineHelperService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'maker.doctrine_helper' shared service.
     *
     * @return \Symfony\Bundle\MakerBundle\Doctrine\DoctrineHelper
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'symfony'.\DIRECTORY_SEPARATOR.'maker-bundle'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'DoctrineHelper.php';

        return $container->privates['maker.doctrine_helper'] = new \Symfony\Bundle\MakerBundle\Doctrine\DoctrineHelper('App\\Entity', ($container->privates['maker.php_compat_util'] ?? $container->load('getMaker_PhpCompatUtilService')), ($container->services['doctrine'] ?? $container->getDoctrineService()), true, ['default' => [0 => [0 => 'App\\Entity', 1 => ($container->privates['doctrine.orm.default_annotation_metadata_driver'] ?? $container->getDoctrine_Orm_DefaultAnnotationMetadataDriverService())]]]);
    }
}
