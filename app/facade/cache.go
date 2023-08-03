package facade

import (
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
	"strings"
)

func init() {

	// 初始化缓存
	initCache()

}

const (
	// CacheModeFile  - 文件缓存
	CacheModeFile = "file"
)

// NewCache - 创建Cache实例
/**
 * @param mode 驱动模式
 * @return CacheInterface
 * @example：
 * 1. cache := facade.NewCache("redis")
 * 2. cache := facade.NewCache(facade.CacheModeRedis)
 */
func NewCache(mode any) CacheInterface {
	switch strings.ToLower(cast.ToString(mode)) {
	case CacheModeFile:
		Cache = FileCache
	default:
		Cache = FileCache
	}
	return Cache
}

// 初始化缓存
func initCache() {
	// 文件缓存
	FileClient, _ := utils.NewFileCache(
		"runtime/cache",
		7200,
		"auth_",
	)

	// File 缓存
	FileCache = &FileCacheStruct{
		Client: FileClient,
	}

	Cache = FileCache
}

// Cache - Cache实例
/**
 * @return CacheInterface
 * @example：
 * cache := facade.Cache.Set("test", "这是测试", 5 * time.Minute)
 */
var Cache CacheInterface
var FileCache *FileCacheStruct

type CacheInterface interface {
	// Has
	/**
	 * @name 判断缓存是否存在
	 * @param key 缓存的key
	 * @return bool
	 */
	Has(key any) (ok bool)
	// Get
	/**
	 * @name 获取缓存
	 * @param key 缓存的key
	 * @return any 缓存值
	 */
	Get(key any) (value any)
	// Set
	/**
	 * @name 设置缓存
	 * @param key 缓存的key
	 * @param value 缓存的值
	 * @param expire （可选）过期时间
	 * @return bool
	 */
	Set(key any, value any, expire ...any) (ok bool)
	// Del
	/**
	 * @name 删除缓存
	 * @param key 缓存的key
	 * @return bool
	 */
	Del(key any) (ok bool)
	// DelPrefix
	/**
	 * @name 删除前缀缓存
	 * @param prefix 缓存的前缀
	 * @return bool
	 */
	DelPrefix(prefix ...any) (ok bool)
	// DelTags
	/**
	 * @name 删除标签缓存
	 * @param tag 缓存的标签
	 * @return bool
	 */
	DelTags(tag ...any) (ok bool)
	// Clear
	/**
	 * @name 清空缓存
	 * @return bool
	 */
	Clear() (ok bool)
}

// ============================ 文件缓存 ============================

type FileCacheStruct struct {
	Client *utils.FileCacheClient
}

func (this *FileCacheStruct) Has(key any) (ok bool) {
	return this.Client.Has(key)
}

func (this *FileCacheStruct) Get(key any) (value any) {
	return utils.Json.Decode(this.Client.Get(key))
}

func (this *FileCacheStruct) Set(key any, value any, expire ...any) (ok bool) {
	return this.Client.Set(key, []byte(utils.Json.Encode(value)), expire...)
}

func (this *FileCacheStruct) Del(key any) (ok bool) {
	return this.Client.Del(key)
}

func (this *FileCacheStruct) DelPrefix(prefix ...any) (ok bool) {
	return this.Client.DelPrefix(prefix...)
}

func (this *FileCacheStruct) DelTags(tag ...any) (ok bool) {
	return this.Client.DelTags(tag...)
}

func (this *FileCacheStruct) Clear() (ok bool) {
	return this.Client.Clear()
}
